game.gameover = {};
game.gameover.preload = function(){
  game.phaser.load.audio('gameoverSound', 'assets/sfx/gameOver.mp3');
};
game.gameover.create = function () {
  score = game.phaser.add.audio('gameoverSound');
  score.play();
  var text = "- Game Over -\n noob!";
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
  game.phaser.add.text(game.phaser.world.centerX- 230, game.phaser.world.centerY, text, style);

};
