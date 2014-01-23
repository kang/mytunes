// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function () {
    this.on('add', function (model) {
      console.log(model);
      if (this.length === 1) {
        this.playFirst();
      }
      // model.on('ended', function() {
      //   console.log('ENDED');
      // });
    });
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

  // events: {
  //   'add': alert('changed')// changed from play()    
  // },

});
