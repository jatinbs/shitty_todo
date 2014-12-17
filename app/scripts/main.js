'use strict';

//this document should mostly contain only ui hooks

var mainDisplay = null;
var mainStorage = new Storage('tasks');
var oldTasks = mainStorage.get();
var mainTaskList = oldTasks ? new TaskList(oldTasks.tasks) : new TaskList([]);
var newTaskTitle = jQuery('#new-task-title');

jQuery(document).ready(function() {

  mainDisplay = new Display(jQuery('#tasks-container'));
  mainDisplay.refreshAll(mainTaskList);

  //take new task input from user
  jQuery('#new-task-form').submit(function(e) {

    //get title text
    var taskText = newTaskTitle.val();

    //create a new task. add to tasklist
    if(taskText.length > 0) {
      mainTaskList.add(taskText);
      mainDisplay.refreshAll(mainTaskList);
      newTaskTitle.val('');
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

  //jQuery('.complete-task').change(function(e) {
  //  var taskIndex = jQuery(this).attr('data-task-id');
  //  mainTaskList.toggleComplete(taskIndex);
  //  mainDisplay.refreshAll(mainTaskList);
  //  mainStorage.set(mainTaskList);
  //});

  jQuery('.tasks-list').sortable({
    handle: '.handle'
  }).bind('sortupdate', function() {
    mainTaskList.reIndexFromUI(jQuery('#tasks-container'));
    mainDisplay.refreshAll(mainTaskList);
    mainStorage.set(mainTaskList);
  });

  jQuery('input').iCheck({
      checkboxClass: 'icheckbox_minimal-grey'
  }).on('ifToggled', function(e) {
    var taskIndex = jQuery(this).attr('data-task-id');
    mainTaskList.toggleComplete(taskIndex);
    mainDisplay.refreshAll(mainTaskList);
    mainStorage.set(mainTaskList);
  });

  jQuery('.task-title-editable').editable().on('save', function(e, params) {
    var index = jQuery(this).attr('data-task-id');
    mainTaskList.updateTitle(params.newValue, index);
    mainStorage.set(mainTaskList);
  });

};
