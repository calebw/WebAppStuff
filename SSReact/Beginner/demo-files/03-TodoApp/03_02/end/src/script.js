var Todo = React.createClass({    

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
                	<li className="todo">Call Henry</li>
                	<li className="todo">Pay phone bill</li>
                </ul>

            </div>
       );
    },
      

});


React.render(<Todo />, document.getElementById('todo'));
