function Display(container) {

  this.container = typeof container !== 'undefined' ? container : jQuery('#tasks-container');

  this.add = function(tasklist) {

  };

  this.deleteAll = function() {

  };

  this.deleteOne = function(index) {

  };

  this.refreshAll = function(tasklist) {

    this.container.find('.task').remove();
    for(var i in tasklist['tasks']) {
      if(tasklist['tasks'].hasOwnProperty(i)) {
        var markup = this.getTaskMarkup(tasklist['tasks'][i], i);
        this.addMarkup(markup);
      }
    }
    addTaskListeners();

  };

  this.getTaskMarkup = function(task, index) {
    var markup = '<li class="task-row task" data-task-id="' + index + '">';
    markup += '<label>';
    markup += '<input type="checkbox" class="complete-task" data-task-id="' + index + '" ';
    if( task.completed ) {
      markup +=  'checked';
    }
    markup += '/>';
    markup += '</label>';
    markup += '<span class="task-title">';
    if( task.completed ) {
      markup +=  '<s>';
    }
    markup += task.title;
    if( task.completed ) {
      markup +=  '</s>';
    }
    markup += '</span>';
    markup += '<span class="task-completed-container"><a href="#" data-task-id="' + index + '" class="delete-task">&times;</a></span>';
    markup += '</li>';
    return markup;
  };

  this.addMarkup = function(markup) {
    this.container.find('.tasks-list').append(markup);
  };

};
