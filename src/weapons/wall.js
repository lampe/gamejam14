function Wall(x,y){
  if(weapons.wallPool === undefined) {
    weapons.wallPool = [];
  }
  weapons.wallPool.push(this);
  this.maxLife = 100;
  this.life = 100;
  this.sprite = game.phaser.add.sprite(x, y, 'wall');
  this.sprite.scale.x = 0.1;
  this.sprite.scale.y = 0.1;

  game.phaser.physics.enable(this.sprite, Phaser.Physics.P2JS);
  this.sprite.body.setCollisionGroup(game.game.wallGroup);
  this.sprite.body.collides([game.game.enemiesGroup, game.game.wallGroup]);
  this.sprite.body.static = true;
  this.lowerHealth = function(minusLife){
    this.life = this.life - minusLife;
  };
}
