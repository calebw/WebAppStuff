"use strict";

var React = require('react');

var DropInput = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    authors: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.object,
    error: React.PropTypes.string
  },

  render: function () {
    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    var optionEntry = function(author){
      var name = author.firstName + ' ' + author.lastName;
      return <option key={author.id} value={author.id}>{name}</option>;
    };

    var emptyOption;
    if(this.props.value.id === ''){
      emptyOption = <option></option>;
    }
    
    return (
     <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <select value={this.props.value.id}
            name={this.props.name}
            className="form-control"
            placeholder={this.props.placeholder}
            ref={this.props.name}
            onChange={this.props.onChange}>
            {emptyOption}
            {this.props.authors.map(optionEntry, this)}
          </select>
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});

module.exports = DropInput;