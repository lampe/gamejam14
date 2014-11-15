game.mainmenu = {};


game.mainmenu.preload = function () {};

game.mainmenu.create = function () {

	this.mainMenuBackground = game.phaser.add.sprite(0,0, "mainMenuBackground");

};


game.mainmenu.update = function () {

	if (game.phaser.input.activePointer.isDown) {
		game.mainmenu.fadeout();

  	}
};

game.mainmenu.fadeout = function (){

	var tween2 = this.add.tween(this.mainMenuBackground).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
		console.log(tween2);
		tween2.onComplete.add(function(){
			//go to main menu
			game.phaser.state.start('tutorial');
		}, this);
}
