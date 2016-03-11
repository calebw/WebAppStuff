"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var CoursesForm = require('./coursesForm');
var CoursesStore = require('../../stores/coursesStore');
var CoursesActions = require('../../actions/coursesActions');
var AuthorStore = require('../../stores/authorStore');

var ManageCoursesPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm('Leave without saving?')) {
				transition.abort();
			}
		}
	},

	getInitialState: function() {
		return {
			course: { id: '', title: '', watchHref: '', author: {id: '', name: ''}, category: '', length: '' },
			errors: {},
			dirty: false
		};
	},

	componentWillMount: function() {
		var courseId = this.props.params.id;

		if (courseId) {
			this.setState({course: CoursesStore.getCourseById(courseId) });
		}
	},

	setCourseState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		if(field === 'author'){
			var author = AuthorStore.getAuthById(value);
			var name = author.firstName + ' ' + author.lastName;
			this.state.course[field].id = value;
			this.state.course[field].name = name;
		} else{
			this.state.course[field] = value;
		}
		return this.setState({course: this.state.course});
	},

	courseFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		if (this.state.course.title === '') {
			this.state.errors.title = 'Enter a title.';
			formIsValid = false;
		}

		if (this.state.course.author.id === '') {
			this.state.errors.author = 'Choose an author.';
			formIsValid = false;
		}

		if (this.state.course.category === '') {
			this.state.errors.category = 'Enter a category.';
			formIsValid = false;
		}

		if (this.state.course.length === '') {
			this.state.errors.length = 'Enter a length.';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveCourse: function(event) {
		event.preventDefault();

		if (!this.courseFormIsValid()) {
			return;
		}
		if(this.state.course.id){
			CoursesActions.updateCourse(this.state.course);
		} else{
			CoursesActions.createCourse(this.state.course);
		}
		this.setState({dirty: false});
		toastr.success('Course saved.');
		this.transitionTo('courses');
	},

	render: function() {
		return (
			<CoursesForm
				course={this.state.course}
				onChange={this.setCourseState}
				onSave={this.saveCourse}
				errors={this.state.errors} />
		);
	}
});

module.exports = ManageCoursesPage;