function BuyMenu() {
    this.score = 1000;
    var style = { font: '65px Arial', fill: '#ff0044', align: 'center' };
    this.scoreText = game.phaser.add.text(game.phaser.width - 200, 10, this.score.toString(), style);

    this.wallCost = 20;
    this.wallLevelLeft = 0;
    this.wallLevelRight = 0;

    this.mineCost = 20;
    this.mineLevelLeft = 0;
    this.mineLevelRight = 0;

    this.gunCost = 20;
    this.gunLevelLeft = 0;
    this.gunLevelRight = 0;

    this.lockCost = 20;
    this.lockLevel = 1;

    this.buttonWallLeft = game.phaser.add.button(
        (game.phaser.width / 2 - 65) - 2 * 179,
        game.phaser.height - 100,
        'buttonWallLeft',
        function() {
            // On Click call - wall
            if(this.score - (this.wallLevelLeft * this.wallCost) > 0) {
                this.score = this.score - (this.wallLevelLeft * this.wallCost);
                this.wallLevelLeft += 1;
            } else {
                //animated score alert?!
            }

            //update text
            this.scoreText.text = this.score.toString();
        }, this, 2, 0, 1,0
    );

    this.buttonWallRight = game.phaser.add.button(
        (game.phaser.width / 2 - 65) - 2 * 154,
        game.phaser.height - 100,
        'buttonWallRight',
        function() {
            // On Click call - wall
            if(this.score - (this.wallLevelLeft * this.wallCost) > 0) {
                this.score = this.score - (this.wallLevelLeft * this.wallCost);
                this.wallLevelLeft += 1;
            } else {
                //animated score alert?!
            }

            //update text
            this.scoreText.text = this.score.toString();
        }, this, 2, 0, 1,0
    );

    this.button2 = game.phaser.add.button(
        (game.phaser.width / 2 - 65)  - 1 * 129,
        game.phaser.height - 100,
        'buttonMineLeft',
        function() {
            // On Click call - mine
            if(this.score - (this.mineLevelLeft * this.mineCost) > 0) {
                this.score = this.score - (this.mineLevelLeft * this.mineCost);
                this.mineLevelLeft += 1;
            } else {
                //animated score alert?!
            }

            //update text
            this.scoreText.text = this.score.toString();
        },
        this,
        2,
        0,
        1,
        0
    );

    this.button2.onInputOver.add(function() {}, this);
    this.button2.onInputOut.add(function() {}, this);

    this.button3 = game.phaser.add.button(
        (game.phaser.width / 2 - 65) + 1 * 129,
        game.phaser.height - 100,
        'buttonGunLeft',
        function() {
            // On Click call - gun
            if(this.score - (this.gunLevelLeft * this.gunCost) > 0) {
                this.score = this.score - (this.gunLevelLeft * this.gunCost);
                this.gunLevelLeft += 1;
            } else {
                //animated score alert?!
            }

            //update text
            this.scoreText.text = this.score.toString();
        },
        this,
        2,
        0,
        1,
        0
    );

    this.button3.onInputOver.add(function() {}, this);
    this.button3.onInputOut.add(function() {}, this);

    this.button4 = game.phaser.add.button(
        (game.phaser.width / 2 - 65) + 2 * 179,
        game.phaser.height - 100,
        'buttonLockLeft',
        function() {
            // On Click call - lock
            if(this.score - (this.lockLevel * this.lockCost) > 0) {
                this.score = this.score - (this.lockLevel * this.lockCost);
                this.lockLevel += 1;
            } else {
                //animated score alert?!
            }

            //update text
            this.scoreText.text = this.score.toString();
        },
        this,
        2,
        0,
        1,
        0
    );

    this.button4.onInputOver.add(function(a) {
        console.log(a);
    }, this);
    this.button4.onInputOut.add(function() {}, this);
}
