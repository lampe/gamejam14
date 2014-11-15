function Mine(x,y){
  if(weapons.minePool === undefined) {
    weapons.minePool = [];
  }
  weapons.minePool.push(this);
  this.sprite = game.phaser.add.sprite(x, y, 'mine');
  this.sprite.scale.x = 0.1;
  this.sprite.scale.y = 0.1;

  game.phaser.physics.enable(this.sprite, Phaser.Physics.P2JS);

  this.exploed = function(){
    this.life = this.life - minusLife;
  };
}
