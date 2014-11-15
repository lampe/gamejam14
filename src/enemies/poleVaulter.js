PoleValter = {};
PoleValter.create = function (x, y, facing) {
  this.direction = 0; //0 = left, 1 = right

  this.sprite = game.phaser.add.sprite(x,y, 'poleVaulter');
  this.facing = facing;
  this.sprite.animations.add('jump', [0, 1, 2, 3], 6, true);
  this.sprite.checkWorldBounds = true;
  this.sprite.outOfBoundsKill = true;
  game.game.enemies.push(this);

  game.phaser.physics.enable(this.sprite, Phaser.Physics.P2JS);

  return this;
};

PoleValter.update = function () {
    if(this.direction === 0) {
        this.sprite.animations.play('left');
        this.sprite.x += 5;
    } else {
        this.sprite.animations.play('right');
        this.sprite.x -= 5;
    }
};
