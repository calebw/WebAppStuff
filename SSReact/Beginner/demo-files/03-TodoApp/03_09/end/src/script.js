var Todo = React.createClass({    
  getInitialState: function() {
        return {editing: false}
    },    
    edit: function() {
              
        this.setState({editing:true});
        //console.log('Editing todo#' + this.props.index);      
    },
    remove: function() {

        //alert('Todo removed');
        this.props.onRemove(this.props.index);
    },
    save: function() {

        var newValue = this.refs.newValue.getDOMNode().value;     
        console.log(newValue + ' saved');
        this.props.onChange(newValue,this.props.index);
            
        this.setState({editing: false});
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
      

});//Todo

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
    add: function() {

        var arr = this.state.todos;
        var newTodo = this.refs.newTodo.getDOMNode().value;
     
        console.log('New todo: ' + newTodo);
        arr.push(newTodo);
        this.setState({todos: arr});        
    },
    update: function(newValue, i) {

        var arr = this.state.todos;
    
        arr[i] = newValue;
        this.setState({todos:arr});
    },
    remove: function(i) {

        var arr = this.state.todos
    
        arr.splice(i,1);
        this.setState({todos: arr})
        console.log('Todo#:' + (i+1) + ' removed');

    }, 
    eachTodo: function (todo,i) {

            return (
                <Todo    key={i}
                         index={i}
                         onChange={this.update}
                         onRemove={this.remove}>
                        {todo}
                </Todo>
            );
    },
    render: function() {

        return (
            <div>
                <h1>Things to DO</h1>

                <div className="form-inline">

                    <div className="form-group">
                        <input className="form-control" placeholder="Add Todo" ref="newTodo"/>               
                        <button onClick={this.add} className="btn btn-default btn-sm">+</button>             
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
