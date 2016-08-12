var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');
//var rootUrl = 'https://blistering-torch-4253.firebaseio.com/';
var rootUrl = 'https://first-ff5ce.firebaseio.com/';

var Hello = React.createClass({
	mixins: [ReactFire],
  getInitialState: function(){
    return {items:{}, loaded: false};
  },
	componentWillMount: function(){
    this.fb = new Firebase(rootUrl+'items/');
		this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded); //When gets data
	},
	render: function() {
		return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header itemsStore={this.firebaseRefs.items}/>
        <hr />
        <div className={'content '+(this.state.loaded ? 'loaded' : '')}>
          <List items={this.state.items} />
          {this.deleteButton()}
        </div>
      </div>
    </div>
  },
  deleteButton: function(){
    if(!this.state.loaded){return}
      return <div className="text-center clear-complete">
        <hr />
        <button type="button" onClick={this.onDeleteDoneClick} 
          className="btn btn-default">Clear Complete</button>
      </div>
  },
  onDeleteDoneClick: function(){
    for(var key in this.state.items){
      if(this.state.items[key].done){
        this.fb.child(key).remove();
      }
    }
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));

/*var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://blistering-torch-4253.firebaseio.com/';

var App = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    console.log(this.state);

    return <h1>
      Hello, React!
    </h1>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));*/

