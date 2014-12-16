'use strict';

//this document should mostly contain only ui hooks

var mainDisplay = null;
var mainStorage = new Storage('tasks');
var oldTasks = mainStorage.get();
var mainTaskList = oldTasks ? new TaskList(oldTasks['tasks']) : new TaskList([]);

jQuery(document).ready(function() {

  mainDisplay = new Display(jQuery('#tasks-container'));
  mainDisplay.refreshAll(mainTaskList);

  //take new task input from user
  jQuery('#new-task-form').submit(function(e) {

    //get title text
    var taskText = jQuery('#new-task-title').val();

    //create a new task. add to tasklist
    if(taskText.length > 0) {
      mainTaskList.add(taskText);
      console.log(mainTaskList);
      mainDisplay.refreshAll(mainTaskList);
      jQuery('#new-task-title').val('');
      mainStorage.set(mainTaskList);
    }
    e.preventDefault();
  });

});

//hacky
var addTaskListeners = function() {

  jQuery('.delete-task').click(function(e) {
    var taskIndex = jQuery(this).attr('data-task-id');
    mainTaskList.delete(taskIndex);
    mainDisplay.refreshAll(mainTaskList);
    mainStorage.set(mainTaskList);
  });

  jQuery('.complete-task').change(function(e) {
    var taskIndex = jQuery(this).attr('data-task-id');
    mainTaskList.toggleComplete(taskIndex);
    mainDisplay.refreshAll(mainTaskList);
    mainStorage.set(mainTaskList);
    console.log(mainTaskList);
  });

};
