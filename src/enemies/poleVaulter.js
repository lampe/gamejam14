function PoleValter(x, y, facing) {
  this.direction = 0; //0 = left, 1 = right

  this.sprite = game.phaser.add.sprite(x,y, 'poleVaulter');
  this.facing = facing;
  this.sprite.animations.add('jump', [0, 1, 2, 3], 6, true);
  this.sprite.animations.add('right', [0,1,2], 6, true);
  this.sprite.animations.add('left', [4,5,6], 6, true);
  this.sprite.checkWorldBounds = true;
  this.sprite.outOfBoundsKill = true;
  this.sprite.hasPole = true;
  game.game.enemies.push(this);
  this.sprite.touched = [];
  game.phaser.physics.enable(this.sprite, Phaser.Physics.P2JS);
  this.sprite.body.setCollisionGroup(game.game.enemiesGroup);
  this.sprite.body.collides(game.game.mineGroup, function(enemy,mine){
    console.log(enemy.sprite.touched.indexOf(mine.data.id) > -1);
    // console.log(mine.data.id);
    if(enemy.sprite.touched.indexOf(mine.data.id) < -1){
      enemy.sprite.touched.push(mine.data.id);
      console.log(enemy.sprite.touched);
      enemy.sprite.hasPole = false;
    }else{
      if(enemy.sprite.hasPole === false){
        enemy.sprite.alive = false;
        mine.sprite.kill();
        mine.sprite.alive = false;
        enemy.velocity.y = -400;
        enemy.velocity.x = -1100;
      }
    }
    // if(enemy.sprite.hasPole ===  true){
    //   enemy.sprite.hasPole = false;
    // }else{
    //   enemy.sprite.alive = false;
    //   mine.sprite.kill();
    //   mine.sprite.alive = false;
    //   enemy.velocity.y = -400;
    //   enemy.velocity.x = -1100;
    // }
  });
  this.update = function () {
    if(this.sprite.alive === true){
      if(this.direction == 0) {
        this.sprite.animations.play('left');
        this.sprite.body.moveRight(250);
      } else {
        this.sprite.animations.play('right');
        this.sprite.body.moveRight(255);
      }
    }
  };
  return this;
}
