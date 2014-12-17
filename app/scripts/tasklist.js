'use strict';

function TaskList(tasks) {

  this.tasks = typeof tasks !== 'undefined' ? tasks : [];

  this.add = function(text, due) {
    var task = new Task(text, due);
    this.tasks.unshift(task);
    new PNotify({
      title: 'Added',
      text: 'Your task has been added to the list. More work to do. Yay!',
      type: 'success'
    });
  };

  this.delete = function(index) {
    if(index in tasks) {

      if(this.tasks[index].completed === false) {
        new PNotify({
          title: 'Deleted',
          text: 'You gave up. You abandoned a task. Ron Swanson hates you.',
          type: 'success'
        });
      }
      else {
        new PNotify({
          title: 'Deleted',
          text: 'Your mom would be so happy if you kept your bedroom as clean as your todo list.',
          type: 'success'
        });
      }
      this.tasks.splice(index, 1);
    }
  };

  this.toggleComplete = function(index) {
    if(index in this.tasks) {
      if(this.tasks[index].completed === false) {
        this.tasks[index].completed = true;
        new PNotify({
          title: 'Success',
          text: 'You\'ve completed the task. Reward yourself with a cookie.',
          type: 'success'
        });
      }
      else {
        this.tasks[index].completed = false;
        new PNotify({
          title: 'What?',
          text: 'You did it wrong the first time? What a loser!',
          type: 'success'
        });
      }
      this.sortCompleted();
    }
  };

  this.updateTitle = function(title, index) {
    if(index in this.tasks) {
      this.tasks[index].title = title;
    }
    new PNotify({
      title: 'Updated!',
      text: 'The task has been updated',
      type: 'success'
    });
  };

  this.sortCompleted = function() {
    this.tasks.sort(compareTaskCompletion);
  };

  this.reIndexFromUI = function(container) {
    var tempTasksArray = [];
    var taskList = this;
    container.find('.task').each(function(i) {
      tempTasksArray.push(taskList.tasks[jQuery(this).attr('data-task-id')]);
    });
    this.tasks = tempTasksArray;
    this.sortCompleted();
  };

}

function compareTaskCompletion(a,b) {
  if (a.completed < b.completed) {
    return -1;
  }
  if (a.completed > b.completed) {
    if (a.completed > b.completed) {
      return 1;
    }
  }
  return 0;
}
