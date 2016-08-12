var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://first-ff5ce.firebaseio.com/';

module.exports = React.createClass({
	getInitialState: function(){
		return {text: this.props.item.text, 
			done: this.props.item.done, textChanged: false}
	},
	componentWillMount: function(){
		this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
	},
	render: function(){
		return <div className="input-group">
			<span className="input-group-addon">
				<input type="checkbox" checked={this.state.done} onChange={this.handleDoneChange} />
			</span>
			<input type="text" className="form-control" disabled={this.state.done} value={this.state.text} 
					onChange={this.handleTextChange} />
			<span className="input-group-btn">
			{this.changesButtons()}
			<button onClick={this.handleDeleteClick} className="btn btn-default">Delete</button>
			</span>
		</div>
	},
	changesButtons: function(){
		if(!this.state.textChanged){return null}
		else{
			return [
				<button onClick={this.handleSaveClick} className="btn btn-default" key={0}>Save</button>,
				<button onClick={this.handleUndoClick} className="btn btn-default" key={1}>Undo</button>
			]
		}
	},
	handleDoneChange: function(event){
		var update = {done: event.target.checked};
		this.setState(update);
		this.fb.update(update);
	},
	handleDeleteClick: function(){
		this.fb.remove();
	},
	handleUndoClick: function(){
		this.setState({text: this.props.item.text, textChanged: false});
	},
	handleSaveClick: function(){
		this.fb.update({text: this.state.text});
		this.setState({textChanged: false});
	},
	handleTextChange: function(event){
		this.setState({text: event.target.value, textChanged: true});
	}
});