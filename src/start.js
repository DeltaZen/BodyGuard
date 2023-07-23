var gameConfig = {
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 640,
		height: 960
	},
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: { y: 0 }
            // debug: true
        }
    },
	scene: [Boot, Preloader, MainMenu, Settings, Game]
}

window.onload = () => {
    window.highscores.init("Body Guard").then(() => {
        game = new Phaser.Game(gameConfig);
        window.focus();
    });
};
