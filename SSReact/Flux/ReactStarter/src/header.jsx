var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {text:''}
	},
	render: function(){
		return <div className="input-group">
			<input value={this.state.text} onChange={this.handleInputChange} onKeyPress={this.handleEnterKey} 
					type="text" className="form-control"/>
			<span className="input-group-btn">
				<button onClick={this.handleClick} className="btn btn-default" type="button">Add</button>
			</span>
		</div>
	},
	handleClick: function(){
		if(!this.state.text){return}
		this.props.itemsStore.push({text: this.state.text, done:false});
		this.setState({text: ''});
	},
	handleInputChange: function(event){
		this.setState({text: event.target.value});
	},
	handleEnterKey: function(event){
		if(event.charCode == 13){
			console.log("Enter Pressed");
			this.handleClick();
		}
	}
});