var Element = {
    init: function(gameObject, sound, scene, cursor, actions) {
        var self = this;
        this.gameObject = gameObject;
        var event = this.gameObject.setInteractive({cursor: "none"});
        event.on('pointerdown', function (pointer) {
            if(cursor.name == actions.cursor){
                if(actions.soundClick.length){
                    sound.playAudioSprite(actions.soundClick[0], actions.soundClick[1]);
                }
                if(actions.scene){
                    scene.stop();
                    scene.run(actions.scene);
                }
            }
            if(actions.switchCursor){
                cursor.switchCursor(actions.switchCursor);
            }
        });
        event.on('pointerover', function () {
            if(actions.cursor){
                if(cursor.name == actions.cursor){
                    cursor.state = cursor.HOVER;
                }
            }
        });
        event.on('pointerout', function () {
            cursor.setState(cursor.DEFAULT);
        });
        return this.gameObject;
    }
}
