function BuyMenu()
{
    this.score = 1000;
    var style = { font: '65px Arial', fill: '#ff0044', align: 'center' };
    this.scoreText = game.phaser.add.text(game.phaser.width - 200, 10, this.score, style);
    this.lockLevel = 1;
    this.lockCost = 20;

    this.button1 = game.phaser.add.button(
        (game.phaser.width / 2 - 65) - 2 * 179,
        game.phaser.height - 100,
        'button1',
        function() {
            // On Click call - wall
            this.score = this.score - 10;
            this.scoreText.text = this.score;
        },
        this,
        2,
        0,
        1,
        0
    );

    this.button1.onInputOver.add(function() {}, this);
    this.button1.onInputOut.add(function() {}, this);

    this.button2 = game.phaser.add.button(
        (game.phaser.width / 2 - 65)  - 1 * 129,
        game.phaser.height - 100,
        'button2',
        function() {
            // On Click call - mine
            console.log('button2');
            this.score = this.score - 10;
            this.scoreText.text = this.score;
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
        'button3',
        function() {
            // On Click call - gun
            this.score = this.score - 10;
            this.scoreText.text = this.score;
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
        'button4',
        function() {
            // On Click call - lock
            if(this.score - (this.lockLevel * this.lockCost) > 0) {
                this.score = this.score - (this.lockLevel * this.lockCost);
                this.lockLevel += 1;
            } else {
                //animated score alert?!
            }

            //update text
            this.scoreText.text = this.score;
        },
        this,
        2,
        0,
        1,
        0
    );

    this.button4.onInputOver.add(function() {}, this);
    this.button4.onInputOut.add(function() {}, this);
}
