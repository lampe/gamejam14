tank = {};
tank.init = function(game){
  this.game = game;
  this.hp = 100;
  this.speed = 10;
  this.attack = 5;
};

tank.add = function(x,y){

  game.phaser.add.sprite(x, y, 'tank')

  //game.game.enemies.add();
  //game.game.gun1.anchor.setTo(0.5, 0.5);
};

tank.tick = function(tick) {
  this.x += this.speed*tick;
};
