// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
 


  initialize: function(){
  },

  enqueue: function(song) {
    SongQueue.push(song);
  },

  dequeue: function(song) {
    
  }

});