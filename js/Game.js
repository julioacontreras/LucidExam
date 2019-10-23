var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

var game = new Phaser.Game(config);
game.exam = Exam;

/*
game.scene.add("Scene1", Scene1);
game.scene.add("Scene2", Scene2);
game.scene.add("Scene3", Scene3);
game.scene.add("Scene4", Scene4);
game.scene.run("Scene4");
*/
