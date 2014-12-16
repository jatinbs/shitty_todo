function TaskList(tasks) {

  tasks = typeof tasks !== 'undefined' ? tasks : [];

  this.add = function(text, due) {
    var task = new Task(text, due);
    tasks.push(task);
  };

  this.delete = function(index) {
    if(index in tasks) {
      tasks.splice(index, 1);
    }
  }
};
