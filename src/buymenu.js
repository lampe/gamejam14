function BuyMenu() {
  this.score = 1000;
  
  this.setScore = function(newScore)
  {
	this.score += newScore;
	this.scoreText.text = this.score;
  }
  
  this.style = { font: '65px Arial', fill: '#ff0044', align: 'center' };
  this.scoreText = game.phaser.add.text(game.phaser.width - 200, 10, this.score.toString(), this.style);

  this.wallCost = 20;
  this.wallLevelLeft = this.wallLevelRight = 0;
  this.buttonWallLeft = game.phaser.add.button((game.phaser.width / 2 - 65) - 2 * 219, game.phaser.height - 100, 'buttonWallLeft',
    function() { // On Click call - wall
      if(this.score - (this.wallLevelLeft * this.wallCost) > 0) {
        this.score = this.score - (this.wallLevelLeft * this.wallCost);
        this.wallLevelLeft += 1;
      } else {
        //animated score alert?!
      }
      this.scoreText.text = this.score.toString(); //update text
    }, this, 2, 0, 1,0
  );
  this.buttonWallRight = game.phaser.add.button((game.phaser.width / 2 - 65) - 2 * 154, game.phaser.height - 100, 'buttonWallRight',
    function() { // On Click call - wall
      if(this.score - (this.wallLevelRight * this.wallCost) > 0) {
        this.score = this.score - (this.wallLevelRight * this.wallCost);
        this.wallLevelRight += 1;
        new Mine((game.phaser.width/2) - 250, game.phaser.height - game.phaser.height*0.35);
      } else {
        //animated score alert?!
      }
      this.scoreText.text = this.score.toString(); //update text
    }, this, 2, 0, 1,0
  );

  this.mineCost = 20;
  this.mineLevelLeft = this.mineLevelRight = 0;
  this.buttonMineLeft = game.phaser.add.button((game.phaser.width / 2 - 65)  - 1 * 129, game.phaser.height - 100, 'buttonMineLeft',
    function() { // On Click call - mine
      if(this.score - (this.mineLevelLeft * this.mineCost) > 0) {
        this.score = this.score - (this.mineLevelLeft * this.mineCost);
        this.mineLevelLeft += 1;
        new Mine((game.phaser.width/2) - 250, game.phaser.height - game.phaser.height*0.35);
      } else {
        //animated score alert?!
      }
      this.scoreText.text = this.score.toString(); //update text
    }, this, 2, 0, 1, 0
  );
  this.buttonMineRight = game.phaser.add.button((game.phaser.width / 2 - 64), game.phaser.height - 100, 'buttonMineRight',
    function() { // On Click call - mine
      if(this.score - (this.mineLevelRight * this.mineCost) > 0) {
        this.score = this.score - (this.mineLevelRight * this.mineCost);
        this.mineLevelRight += 1;
        new Mine((game.phaser.width/2) + 150, game.phaser.height - game.phaser.height*0.35);
      } else {
        //animated score alert?!
      }
      this.scoreText.text = this.score.toString(); //update text
    }, this, 2, 0, 1, 0
  );

  this.gunCost = 20;
  this.gunLevelLeft = this.gunLevelRight = 0;
  this.gunLeftPresent = this.gunRightPresent = false;
  this.buttonGunLeft = game.phaser.add.button((game.phaser.width / 2) + 225, game.phaser.height - 100, 'buttonGunLeft',
    function() { // On Click call - gun
      if(this.gunLeftPresent === true) return;
      if(this.score - (this.gunLevelLeft * this.gunCost) > 0) {
        this.score = this.score - (this.gunLevelLeft * this.gunCost);
        this.gunLevelLeft += 1;
        new Gun((game.phaser.width/2) + 200, game.phaser.height - game.phaser.height*0.35,500,2,100, "right");
        this.gunLeftPresent = true;
      } else {
        //animated score alert?!
      }
      this.scoreText.text = this.score.toString(); //update text
    }, this, 2, 0, 1, 0
  );
  this.buttonGunRight = game.phaser.add.button((game.phaser.width / 2) + 95, game.phaser.height - 100, 'buttonGunRight',
    function() { // On Click call - gun
      if(this.gunRightPresent === true) return;
      if(this.score - (this.gunLevelRight * this.gunCost) > 0) {
        this.score = this.score - (this.gunLevelRight * this.gunCost);
        this.gunLevelRight += 1;
        new Gun((game.phaser.width/2) - 200, game.phaser.height - game.phaser.height*0.35,500,2,100, "left");
        this.gunRightPresent = true;
      } else {
        //animated score alert?!
      }
      this.scoreText.text = this.score.toString(); //update text
    }, this, 2, 0, 1, 0
  );

  this.buttonLockLeft = game.phaser.add.button((game.phaser.width / 2 - 65) + 3 * 179, game.phaser.height - 100, 'buttonLockLeft',
    function() { // On Click call - lock
      if(this.score - (this.lockLevel * this.lockCost) > 0) {
        this.score = this.score - (this.lockLevel * this.lockCost);
        this.lockLevel += 1;
      } else {
        //animated score alert?!
      }
      this.scoreText.text = this.score.toString(); //update text
    }, this, 2, 0, 1, 0
  );
}
