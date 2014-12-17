function TaskList(tasks) {

  this.tasks = typeof tasks !== 'undefined' ? tasks : [];

  this.add = function(text, due) {
    var task = new Task(text, due);
    this.tasks.unshift(task);
  };

  this.delete = function(index) {
    if(index in tasks) {
      this.tasks.splice(index, 1);
    }
  };

  this.toggleComplete = function(index) {
    if(index in this.tasks) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
    this.sortCompleted();
  };

  this.updateTitle = function(title, index) {
    if(index in this.tasks) {
      this.tasks[index].title = title;
    }
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
  }

};

function compareTaskCompletion(a,b) {
  if (a.completed < b.completed)
    return -1;
  if (a.completed > b.completed)
  if (a.completed > b.completed)
    return 1;
  return 0;
}
