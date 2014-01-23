// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function () {
    this.on('add', function (model) {
      if (this.length === 1) {
        console.log(this);
        this.playFirst();
      }
    });
    // this.on('ended', function(){
    //   console.log('ended');
    // });
          // model.on('ended', function() {
      //   // model.ended();
      //   this.dequeue();
      //   debugger;
      //   this.playFirst();
      // });

    // this.on('ended', function() {
    // model.ended();
    //   this.dequeue();
    //   this.playFirst();
    // });
  },

  playFirst: function() {
    this.at(0).play();
  },

  ended: function() {
    // Triggering an event here will also trigger the event on the collection
    this.at(0).remove();
    if(this.length>0){
      this.playFirst();
    }
  }


});
