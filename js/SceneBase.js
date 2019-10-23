var SceneBase = {

    preload: function () {
        /*
        this.load.setBaseURL('http://172.17.80.253:8080');

        this.load.image('eye1', 'assets/img/eye.png');
        this.load.image('eye2', 'assets/img/eye-click.png');
        this.load.image('eye3', 'assets/img/eye-hover.png');

        this.load.image('hand1', 'assets/img/hand.png');
        this.load.image('hand2', 'assets/img/hand-click.png');
        this.load.image('hand3', 'assets/img/hand-hover.png');

        this.cursor = _.clone(Cursor);
        this.cursor.setDefaultName("hand");
        this.cursor.initCollection("eye");
        this.cursor.initCollection("hand");
        */

        if(this.preloadEx){
            this.preloadEx();
        }
    },

    create: function (data) {
        var self = this;
        if(this.createEx){
            this.createEx(data);
        }

        /*
        var eyeIcon = _.clone(Element);
        eyeIcon.init(
            self.add.image(70, 550, 'eye1'),
            self.sound,
            self.scene,
            self.cursor,
            {
                switchCursor: "eye",
                soundClick: ['sfx', "ping"]
            }
        );
        var handIcon = _.clone(Element);
        eyeIcon.init(
            self.add.image(170, 550, 'hand1'),
            self.sound,
            self.scene,
            self.cursor,
            {
                switchCursor: "hand",
                soundClick: ['sfx', "ping"]
            }
        );
        self.cursor.setImg("eye", self.cursor.IDX_DEFAULT, self.add.image(0, 0, 'eye1'));
        self.cursor.setImg("eye", self.cursor.IDX_CLICK, self.add.image(0, 0, 'eye2'));
        self.cursor.setImg("eye", self.cursor.IDX_HOVER, self.add.image(0, 0, 'eye3'));
        self.cursor.setImg("hand", self.cursor.IDX_DEFAULT, self.add.image(0, 0, 'hand1'));
        self.cursor.setImg("hand", self.cursor.IDX_CLICK, self.add.image(0, 0, 'hand2'));
        self.cursor.setImg("hand", self.cursor.IDX_HOVER, self.add.image(0, 0, 'hand3'));
        */
    },

    update: function (time, delta) {
        var pointer = this.input.activePointer;
        if( this.cursor.isNormal() ){
            if(pointer.isDown){
                this.cursor.setPosition(this.cursor.IDX_CLICK, pointer.worldX, pointer.worldY);
            }else{
                this.cursor.setPosition(this.cursor.IDX_DEFAULT, pointer.worldX, pointer.worldY);
            }
        }else{
            this.cursor.setPosition(this.cursor.IDX_HOVER, pointer.worldX, pointer.worldY);
        }
        if(this.updateEx){
            this.updateEx(time, delta);
        }
    }
}
