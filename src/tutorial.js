game.tutorial = {};


game.tutorial.preload = function () {};

game.tutorial.create = function () {

	this.tutorialBackground = game.phaser.add.sprite(0,0, "tutorialBackground");
	this.tutorialOverlay = game.phaser.add.sprite(0,0, "tutorialOverlay");


};


game.tutorial.update = function () {

	if (game.phaser.input.activePointer.isDown) {
		game.tutorial.fadeout();
  	}
};

game.tutorial.fadeout = function (){

	var tween2 = this.add.tween(this.tutorialBackground).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
		console.log(tween2);
		tween2.onComplete.add(function(){
			//go to main menu
			game.phaser.state.start('game');
		}, this);

	var tween3 = this.add.tween(this.tutorialOverlay).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
		console.log(tween3);
		tween3.onComplete.add(function(){
			//go to main menu
			game.phaser.state.start('game');
		}, this);
}


