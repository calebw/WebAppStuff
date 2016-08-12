var React = require('React');

module.exports = React.createClass({
	handleClick: function(){
		this.props.whenItemClicked(this.props.item);
	},
	render: function(){
		return <li className={this.props.className}><a onClick={this.handleClick}>{this.props.item}</a></li>
	}
});