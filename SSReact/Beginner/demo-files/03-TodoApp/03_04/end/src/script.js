var Todo = React.createClass({    

    
    edit: function() {
      alert('edit todo');
    }, 

    remove: function() {

      alert('Todo removed')
    },
    render: function() {
      
           return (
            


              
                    <li className="todo">

                      <span onClick={this.edit}>
                        {this.props.children}
                      </span>

                      <button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" />


                    </li>
            
            
            
       );
    },
      

});


React.render(<div>

                <h1>Things to DO</h1>

                <div className="form-inline">

                    <div className="form-group">
                        <input className="form-control" placeholder='Add Todo' />
                        <button className="btn btn-default btn-sm">+</button>
                    </div>

                </div>

              <ul>
                <Todo>Call Henry</Todo>
                <Todo>Pay phone bill</Todo>
                <Todo>Make dentist appt</Todo>
              </ul>

            </div>, document.getElementById('todo'));






