var Cursor = {
    IDX_DEFAULT: 0,
    IDX_CLICK: 1,
    IDX_HOVER: 2,
    HOVER: "hover",
    DEFAULT: "default",
    state: "default",
    name: "",
    collection: {},
    setDefaultName: function(name) {
        this.name = name;
    },
    initCollection: function(name) {
        this.collection[name] = [null, null, null];
    },
    setState: function(state) {
        this.state = state;
    },
    isHover: function() {
        if( this.state == this.HOVER ){
            return true;
        }
        return false;
    },
    isNormal: function() {
        if( this.state == this.DEFAULT ){
            return true;
        }
        return false;
    },
    setImg: function(name, idx, img){
        img.visible = false;
        this.collection[name][idx] = img;
    },
    switchCursor: function(name) {
        var self = this;
        self.name = name;
        _.each(self.collection, function(item) {
            _.each(item, function(img) {
                img.visible = false;
            });
        });
    },
    setPosition: function(idx, x, y) {
        var self = this;
        _.each(self.collection[self.name], function(img) {
            img.visible = false;
        });
        self.collection[self.name][idx].visible = true;
        self.collection[self.name][idx].setPosition(x, y);
    }
}
