function Display(container) {

  this.container = typeof container !== 'undefined' ? container : jQuery('#task-table');

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
    var markup = '<tr class="task-row task">';
    markup += '<td>';
    markup += '<input type="checkbox" class="complete-task" data-task-id="' + index + '" ';
    if( task.completed ) {
      markup +=  'checked';
    }
    markup += '/>';
    markup += '</td>';
    markup += '<td>';
    if( task.completed ) {
      markup +=  '<s>';
    }
    markup += task.title;
    if( task.completed ) {
      markup +=  '</s>';
    }
    markup += '</td>';
    markup += '<td><a href="#" data-task-id="' + index + '" class="delete-task">&times;</a></td>';
    markup += '</tr>';
    return markup;
  };

  this.addMarkup = function(markup) {
    this.container.append(markup);
  };

};
