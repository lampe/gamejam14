function Mine(x,y){
  if(weapons.minePool === undefined) {
    weapons.minePool = [];
  }
  weapons.minePool.push(this);
  this.sprite = game.phaser.add.sprite(x, y, 'mine');
  this.sprite.scale.x = 0.1;
  this.sprite.scale.y = 0.1;

  game.phaser.physics.enable(this.sprite, Phaser.Physics.P2JS);
  this.sprite.body.enableBody = true;
  this.sprite.body.setRectangle(40, 40);
  this.sprite.body.setCollisionGroup(game.game.mineGroup);
  this.sprite.body.collides(game.game.enemiesGroup, function(body1,body2){
    console.log(body1.sprite.key, "BLAAAAAAAAAAAAAAAA", body2.sprite.key)
    console.log("hitPANDA");
    body1.sprite.kill();
    body2.sprite.kill();
  });
  this.exploed = function(){
    this.life = this.life - minusLife;
  };
}
