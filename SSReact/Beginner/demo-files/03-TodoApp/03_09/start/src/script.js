var Todo = React.createClass({    
    getInitialState: function () {
      return {editing:false}
    },
    edit: function() {
      // alert('edit todo');
      this.setState({editing: true});
    }, 

    remove: function() {

      alert('Todo removed');
    },
    save: function() {
        var val = this.refs.newValue.getDOMNode().value;
        this.props.onChange(val, this.props.index);
        this.setState({editing: false});
    },
    todoDisplay:function() {

        return (
                          
          <li className="todo">

            <span onClick={this.edit}>
              {this.props.children}
            </span>

            <button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" />


          </li>           
            
       );
    },
    todoForm:function() {
      return (
                          
          <li className="todo">

            <span>
              <input type="text" placeholder="Edit Todo" ref="newValue" defaultValue={this.props.children} />
            </span>

            <button onClick={this.save} className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk remove pull-right" />


          </li>           
            
       );

    },
    render: function() {
      
      if(this.state.editing) {
        return this.todoForm();
      } else {
        return this.todoDisplay();
      }
        
    },
      

});




var TodoList = React.createClass({

  getInitialState: function() {
    return {

        todos: [
          'Call Henry',
          'Pay phone bill',
          'Make dentist appt' 

        ]
    };
  },

  update: function(newValue, i) {

    var arr = this.state.todos;
    arr[i] = newValue;
    this.setState({todos: arr});
  },
  eachTodo: function(todo, i) {
    return <Todo key={i}
                 index={i}
                 onChange={this.update} >
            {todo}
           </Todo>
  },
  render: function() {

    return  (

        <div>

              <h1>Things to DO</h1>

              <div className="form-inline">

                  <div className="form-group">
                      <input className="form-control" placeholder='Add Todo' />
                      <button className="btn btn-default btn-sm">+</button>
                  </div>

              </div>

            <ul>
              {this.state.todos.map(this.eachTodo)}

            </ul>

          </div>
      );
  }


});


React.render(<TodoList />, document.getElementById('todo'));












