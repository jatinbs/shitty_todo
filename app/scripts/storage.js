'use strict';

function Storage(id) {
  this.id = typeof id !== 'undefined' ? id : 'tasks';

  this.get = function() {
    return JSON.parse(localStorage.getItem(this.id));
  };

  this.set = function(data) {
    localStorage.setItem(this.id, JSON.stringify(data));
  };

}
