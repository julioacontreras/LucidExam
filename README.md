# LucidExam 0.1 Alpha

Game Engine to Action Click Games. Is possible create games and analize the user performance.

## Features:

* Exam to know the user performance.
* Create quickly games style Action Click.
* Multi-platform works Linux, Mac and Windows.

## Dependencies:

* Phaser 3.2
* Underscore 1.9.1

## Install:

```
$ git clone
$ http-server
```

## Get started:

This is a structure in the project, consisting of a Game and Scenes:
```
/
|
+---> assets
|          +
|          +--> img    //Imagens in game
|          |
|          +--> audio  //Fx and musics in game
|
+---> js
|      +
|      +------> core   //LucidExam Game Engine
|      |
|      +------> vendor //Third party
|      |
|      Game.js         //Start game
|      Scene1.js       //First game scene
|      Scene*.js       //* game scene
|      SceneBase.js    //Base game scene with the actions can use in game
|
index.html
```

In Game.js:
```javascript
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
game.exam = Exam;                    //inject Exam to evaluate user performance.   
game.scene.add("Scene1", Scene1);
game.scene.add("Scene2", Scene2);
game.scene.add("Scene3", Scene3);
game.scene.add("Scene4", Scene4);
game.scene.run("Scene4");
```

Example in Scene.js:
```javascript
var Scene1 = new Phaser.Class(_.extend(SceneBase,{

    preloadEx: function () {
        //create images and stuff
    }

    createEx: function (data) {
        //settings images and stuff
    }

    updateEx: function (time, delta) {
        //game loop
    }

}));
```

### Change Scene:

The Class Element is possible create area, image, sprite with interact actions in SceneBase.
```javascript
var Scene1 = new Phaser.Class(_.extend(SceneBase,{

    preloadEx: function () {
        this.load.setBaseURL('http://localhost:8080');
        this.load.audioSprite('sfx', 'assets/audio/fx_mixdown.json', [
            'assets/audio/fx_mixdown.ogg',
            'assets/audio/fx_mixdown.mp3'
        ]);
    }

    createEx: function (data) {
        // if you use eye action and click will change to Scene2 and play sound numkey
        var gameElement = _.clone(Element);
        gameElement.init(
            self.add.rectangle(350, 400, 200, 82, 0x666600, 1),
            self.sound,
            self.scene,
            self.cursor,
            {
                cursor: "eye",
                soundClick: ['sfx', "numkey"],
                scene: "Scene2"
            }
        );
    }

}));

```

### Create actions:

In SceneBase you can set the actions in your game.

## Class Exam

```
game.exam.startExam()                 // Start time exame
game.exam.finishExam()                // Finish time exame
game.exam.timeExamInSeconds()         // Count total time ingame
game.exam.add(name, valueCorrect)     // Add question
game.exam.clearQuestion(index)        // Clear question
game.exam.markQuestion(index, value)  // Mark question
game.exam.average()                   // Get average of the questions
```
