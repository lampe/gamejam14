function Kanonenfutter(x, y, facing){
    this.direction = 0; //0 = left, 1 = right

    this.sprite = game.phaser.add.sprite(x,y, 'kanonenfutter');
    game.phaser.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.facing = facing;
    this.sprite.animations.add('left', [12, 13, 14, 15], 6, true);
    this.sprite.animations.add('wall', [20, 21, 22, 23], 6, true);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    game.game.enemies.push(this);
    this.id = Math.random();


  this.update = function () {
    // console.log(this);
      if(this.direction == 0) {
          this.sprite.animations.play('left');
          this.sprite.x += 5;
      } else {
          this.sprite.animations.play('right');
          this.sprite.x -= 5;
      }
  };
  return this;
}
