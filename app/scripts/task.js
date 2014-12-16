'use strict';

function Task(title, due) {

  due = typeof due !== 'undefined' ? due : null;
  this.id = 2;
  this.title = title;
  this.completed = false;

}
