function BuyMenu()
{
	this.score = 1000;
	var style = { font: '65px Arial', fill: '#ff0044', align: 'center' };
	this.text = game.phaser.add.text(game.phaser.width - 200, 10, this.score, style);
    
    console.log(game.phaser.width);
    console.log(game.phaser.width / 2);
    console.log(game.phaser.width / 2 -(65) );
	
	this.button1 = game.phaser.add.button((game.phaser.width / 2 - 65) - 2 * 179 , game.phaser.height - 98, 'button1',
	function() 
	{
		this.score = this.score - 10;
		this.text.text = this.score;
	}, this, 2, 0, 1, 0);
	this.button1.onInputOver.add(function() 
	{
	}, this);
    this.button1.onInputOut.add(function() 
	{
	}, this);
	

	this.button2 = game.phaser.add.button((game.phaser.width / 2 - 65)  - 1 * 129 , game.phaser.height - 98, 'button2',
	function() 
	{
		this.score = this.score - 10;
		this.text.text = this.score;
	}, this, 2, 0, 1, 0);
	this.button2.onInputOver.add(function() 
	{
	}, this);
    this.button2.onInputOut.add(function() 
	{
	}, this);
	

	this.button3 = game.phaser.add.button((game.phaser.width / 2 - 65) + 1 * 129  , game.phaser.height - 98, 'button3',
	function() 
	{
		this.score = this.score - 10;
		this.text.text = this.score;
	}, this, 2, 0, 1, 0);
	this.button3.onInputOver.add(function() 
	{
	}, this);
    this.button3.onInputOut.add(function() 
	{
	}, this);
	
	this.button4 = game.phaser.add.button((game.phaser.width / 2 - 65) + 2 * 179  , game.phaser.height - 98, 'button4',
	function() 
	{
		this.score = this.score - 10;
		this.text.text = this.score;
	}, this, 2, 0, 1, 0);
	this.button4.onInputOver.add(function() 
	{
	}, this);
    this.button4.onInputOut.add(function() 
	{
	}, this);
	
}