function Mine(x,y){
  if(weapons.minePool === undefined) {
    weapons.minePool = [];
  }
  weapons.minePool.push(this);
  this.sprite = game.phaser.add.sprite(x, y, 'mine');
  this.sprite.animations.add('loop', Phaser.Animation.generateFrameNames('MineIdle_02', 0, 1,'', 2), 15, true, false);
  // this.sprite.animations.start('loop');
  // this.sprite.scale.x = 1;
  // this.sprite.scale.y = 1;

  game.phaser.physics.enable(this.sprite, Phaser.Physics.P2JS);
  // this.sprite.body.enableBody = true;
  // this.sprite.body.setRectangle(240, 240);
  this.sprite.body.static = true;
  this.sprite.body.setCollisionGroup(game.game.mineGroup);
  this.sprite.body.collides([game.game.enemiesGroup,game.game.mineGroup]);

  this.exploed = function(){
    this.life = this.life - minusLife;
  };
}
