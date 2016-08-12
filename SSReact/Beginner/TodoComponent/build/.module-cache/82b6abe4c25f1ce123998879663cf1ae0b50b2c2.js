var Todo = React.createClass({displayName: "Todo",
	getInitialState: function(){
		return {editing:false}
	},
	
	edit: function(){
		alert('edit todo');
		this.setState({editing:true});
	},

	remove: function(){
		alert('remove todo');
		this.props.onRemove(this.props.index);
	},

	save: function() {
		var val = this.refs.newValue.value;
		//alert('Todo: '+val+' saved!');
		console.log(this.props.index);
		this.props.onChange(val, this.props.index);
		this.setState({editing:false});
	},

	todoDisplay: function(){
		return (
			
			/*<li className="todo">{this.props.todo}</li>*/
			React.createElement("li", {className: "todo"}, 
				React.createElement("span", {onClick: this.edit}, this.props.children), 
				React.createElement("button", {className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right", 
					onClick: this.remove})
			)
		);
	},

	todoForm: function(){
		return (
			
			/*<li className="todo">{this.props.todo}</li>*/
			React.createElement("li", {className: "todo"}, 
				React.createElement("span", null, 
					React.createElement("input", {type: "text", placeholder: "Edit Todo", ref: "newValue", defaultValue: this.props.children})
				), 
				React.createElement("button", {className: "btn btn-default btn-sm glyphicon glyphicon-floppy-disk remove pull-right", 
					onClick: this.save})
			)
		);
	},

	render: function(){
		if(this.state.editing){
			return this.todoForm();
		} else{
			return this.todoDisplay();
		}
	}
});

var TodoList = React.createClass({displayName: "TodoList",
	getInitialState: function(){
		return {
			todos: ['Call Henry', 'Pay Phone Bill', 'Make Dentist Apt'],
			text:"", placeholder: "Add Todo"
		};
	},
	onChange: function(e){
		this.setState({text: e.target.value});
	},
	add: function(e){
		var arr = this.state.todos;
		var newTodo = this.refs.newTodo.value;
		//console.log('New Todo: '+newTodo);
		if(!newTodo){
			e.preventDefault();
			this.setState({placeholder:"Type a Todo"});
		} else{
			arr.push(newTodo);
			this.setState({todos: arr, text:""});
		}
	},
	update: function(newValue, i){
		var arr = this.state.todos;
		arr[i] = newValue;
		this.setState({todos: arr});
	},
	remove: function(i){
		var arr = this.state.todos;
		arr.splice(i, 1);
		this.setState({todos: arr});
		console.log('Todo#: '+(i+1)+' removed!');
	},
	eachTodo: function(todo, i){
		return React.createElement(Todo, {key: i, index: i, 
				onChange: this.update, 
				onRemove: this.remove}, 
			todo)
	},
	render: function(){
		return(
		React.createElement("div", null, 
			React.createElement("h1", null, "Things to Do"), 
			React.createElement("div", {className: "form-inline"}, 
				React.createElement("div", {className: "form-group"}, 
					React.createElement("input", {ref: "newTodo", className: "form-control", placeholder: this.state.placeholder, 
						value: this.state.text, onChange: this.onChange}), 
					React.createElement("button", {onClick: this.add, className: "btn btn-default btn-sm"}, "+")
				)
			), 
			React.createElement("ul", null, 
				/*<Todo todo="Call Henry"/>
				<Todo todo="Pay Phone Bill"/>
				<Todo todo="Make Appt"/>
				<Todo>Call Henry</Todo>
				<Todo>Pay Phone Bill</Todo>
				<Todo>Make Appt</Todo>*/

				this.state.todos.map(this.eachTodo)
			)
		)
		);
	}
});

ReactDOM.render(React.createElement(TodoList, null), document.getElementById('todo'));