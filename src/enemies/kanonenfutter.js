function Kanonenfutter(x, y, facing){
  this.direction = 0; //0 = left, 1 = right
  this.sprite = game.phaser.add.sprite(x,y, 'kanonenfutter');
  this.facing = facing;
  this.sprite.animations.add('left', [12, 13, 14, 15], 6, true);
  this.sprite.animations.add('wall', [20, 21, 22, 23], 6, true);
  this.sprite.checkWorldBounds = false;


  this.sprite.outOfBoundsKill = true;
  game.phaser.physics.enable(this.sprite, Phaser.Physics.P2JS);
  this.sprite.body.collideWorldBounds = false;
  this.sprite.body.setCollisionGroup(game.game.enemiesGroup);
  this.sprite.body.collides(game.game.bulletsGroup, function(body1,body2){
    body1.sprite.kill();
    body2.sprite.kill();
  });
  this.sprite.body.collides(game.game.mineGroup, function(body1,body2){
    console.log("kanonen mine")
    // body1.sprite.kill();
    body1.sprite.alive = false;
    body2.sprite.kill();
    body2.sprite.alive = false;
    body1.velocity.y = -400;
    body1.velocity.x = -1100;
  });
  this.sprite.body.collides(game.game.bycGroup, function(body1,body2){
    console.log("kanonen byc")
    body1.sprite.kill();
    body2.sprite.kill();
  });
  this.sprite.body.collides(game.game.wallGroup, function(body1,body2){
    console.log("kanonen wall")
    body1.sprite.kill();
    body2.sprite.kill();
  });
  this.update = function () {
    console.log(this.sprite.alive);
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
  game.game.enemies.push(this);
  return this;
}
