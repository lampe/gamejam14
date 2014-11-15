game.environmentTest = {};


game.environmentTest.preload = function () {

};

game.environmentTest.create = function () {

	this.sprite = game.phaser.add.sprite(0,0, 'background');
	this.sprite.animations.add('loop');
	this.sprite.animations.play('loop', 5, true);

};


game.environmentTest.update = function () {

};