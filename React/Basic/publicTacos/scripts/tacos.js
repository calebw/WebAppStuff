var Parent = React.createClass({
  getInitialState() {
    return {
      tacos: [ 'Guacamole', 'Beef', 'Bean' ]
    };
  },
  handleReverse() {
    this.setState( { tacos: this.state.tacos.reverse() } );
  },
  render() {
    return <div className="parent-component">
      <h3 onClick={ this.handleReverse }>List of tacos:</h3>
      <TacosList tacos={ this.state.tacos } />
    </div>;
  }
});

var TacosList = React.createClass({
  render() {
    return <div className="tacos-list">
      {this.props.tacos.map( ( taco, index ) => {
        return <p key={ `taco-${ index }` }>{ taco }</p>;
      })}
    </div>;
  }
});

ReactDOM.render(
  <Parent url="/" />,
  document.getElementById('content')
);