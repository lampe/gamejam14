function Kanonenfutter(x,y,facing){
  this.sprite = game.phaser.add.sprite(x,y, 'kanonenfutter');
  game.phaser.physics.enable(this.sprite, Phaser.Physics.ARCADE);
  this.facing = facing;
  this.sprite.animations.add('left', [12, 13, 14, 15], 6, true);
  this.sprite.checkWorldBounds = true;
  this.sprite.outOfBoundsKill = true;
}
