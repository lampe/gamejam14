function Mine(x,y){
  if(weapons.minePool === undefined) {
    weapons.minePool = [];
  }
  weapons.minePool.push(this);
  this.sprite = game.phaser.add.sprite(x, y, 'mine');
  game.phaser.physics.enable(this.sprite, Phaser.Physics.ARCADE);
  this.sprite.scale.x = 0.1;
  this.sprite.scale.y = 0.1;
  this.exploed = function(){
    this.life = this.life - minusLife;
  };
}
