function TaskList(tasks) {

  this.tasks = typeof tasks !== 'undefined' ? tasks : [];

  this.add = function(text, due) {
    var task = new Task(text, due);
    this.tasks.push(task);
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
  };

  this.sortCompleted = function() {

  };

};
