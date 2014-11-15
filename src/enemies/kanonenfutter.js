function Kanonenfutter(x, y, facing){
  this.direction = 0; //0 = left, 1 = right

  this.sprite = game.phaser.add.sprite(x,y, 'kanonenfutter');


  this.facing = facing;
  this.sprite.animations.add('left', [12, 13, 14, 15], 6, true);
  this.sprite.animations.add('wall', [20, 21, 22, 23], 6, true);
  // this.sprite.checkWorldBounds = true;
  // this.sprite.outOfBoundsKill = true;

  game.game.enemies.push(this);
  game.phaser.physics.enable(this.sprite, Phaser.Physics.P2JS);
  this.sprite.body.enableBody = true;
  this.sprite.body.setRectangle(40, 40);
  this.sprite.body.setCollisionGroup(game.game.enemiesGroup);
  this.sprite.body.collides(game.game.bulletsGroup, function(body1,body2){
    console.log("hitPANDA");
    console.log(body1.sprite.key, "BLAAAAAAAAAAAAAAAA", body2.sprite.key)
    body1.sprite.kill();
    body2.sprite.kill();
  });
  this.update = function () {
    // console.log(this);
    if(this.direction == 0) {
      this.sprite.animations.play('left');
      this.sprite.body.moveRight(250);
    } else {
      this.sprite.animations.play('right');
      this.sprite.body.moveRight(255);
    }
  };
  return this;
}
