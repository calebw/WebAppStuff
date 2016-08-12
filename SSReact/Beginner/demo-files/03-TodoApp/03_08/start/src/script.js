var Todo = React.createClass({    
    getInitialState: function() {
        return {editing: false}
    },    
    edit: function() {
              
        this.setState({editing:true});
      
    },
    remove: function() {

        alert('Todo removed');

    },
    save: function() {
        var val = this.refs.newValue.getDOMNode().value;
        alert('Todo: '+ val + ' saved!');
        this.setState({editing:false});
    },
    todoDisplay: function() {
        return (
            <div>

                    <li className="todo">

                        <span onClick={this.edit}>
                            {this.props.children}
                        </span>

                        <button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"/>


                    </li>

            </div>
        );
    }, 
    todoForm: function() {
        return (
            <div>

                    <li className="todo">

                        <span>
                            <input placeholder="Edit todo" type="text" ref="newValue" defaultValue={this.props.children}/>                             
                        </span>

                        <button onClick={this.save} className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk pull-right"/>


                    </li>
         

            </div>
        );

    },
    render: function() {
      
       if(this.state.editing){
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
                'Call Amy', 
                'Pay phone bill', 
                'Christmas cards'
            ]
        };
    },
    eachTodo: function (todo,i) {

            return (
                <Todo>{todo}</Todo>
            )
    },
    render: function() {

        return (
            <div>
                <h1>Things to DO</h1>

                <div className="form-inline">

                    <div className="form-group">
                        <input className="form-control" placeholder="Add Todo" />               
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
