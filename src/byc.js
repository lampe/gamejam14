function Byc(){
  this.maxLife = 250;
  this.life = 250;
  this.healthbar = game.game.add.graphics(0,0);
  this.healthbar.lineStyle(10, 0xffd900, 1);
  this.healthbar.moveTo(0,50);
  this.healthbar.lineTo(250, 50);
  this.sprite = game.phaser.add.sprite(game.phaser.width/2, game.phaser.height - 64, 'byc');
  this.sprite.scale.x = 0.1;
  this.sprite.scale.y = 0.1;

  this.lowerHealth = function(minusLife){
    this.life = this.life - minusLife;
    if(this.life >= 0){
      game.phaser.state.start('gameover');
    }else{
      this.healthbar.clear();
      this.healthbar.lineStyle(10, 0xffd900, 1);
      this.healthbar.moveTo(0,50);
      this.healthbar.lineTo(this.life, 50);
    }
  };
}
