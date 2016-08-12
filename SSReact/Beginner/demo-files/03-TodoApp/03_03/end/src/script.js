var Todo = React.createClass({    

    render: function() {
      
           return (
            <div>

                <ul>
                	<li className="todo">{this.props.todo}</li>
          
                </ul>

            </div>
       );
    },
      

});


React.render(<div>
                <h1>Things to DO</h1>

                <div className="form-inline">

                    <div className="form-group">
                        <input className="form-control" placeholder="Add Todo" />               
                        <button className="btn btn-default btn-sm">+</button>             
                    </div>
             
                </div>

                <Todo todo="Call Henry"/>
                <Todo todo="Pay phone bill"/>
                <Todo todo="Make Dentist Appt"/>
            </div>, document.getElementById('todo'));
