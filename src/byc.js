function Byc(){
  this.sprite = game.phaser.add.sprite(game.phaser.width/2, game.phaser.height - 32, 'byc');
  game.phaser.physics.enable(this.sprite, Phaser.Physics.ARCADE);
  this.sprite.anchor.setTo(0.5, 0.5);
  this.sprite.scale.x = 0.1;
  this.sprite.scale.y = 0.1;

  this.maxLife = 250;
  this.life = 2;
  this.healthbar = game.game.add.graphics(0,0);
  this.healthbar.lineStyle(10, 0xffd900, 1);
  this.healthbar.moveTo(0,50);
  this.healthbar.lineTo(250, 50);


  this.lowerHealth = function(minusLife){
    this.life = this.life - minusLife;
    if(this.life <= 0){
      game.phaser.state.start('gameover');
    }else{
      this.healthbar.clear();
      this.healthbar.lineStyle(10, 0xffd900, 1);
      this.healthbar.moveTo(0,50);
      this.healthbar.lineTo(this.life, 50);
    }
  };
}
