"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var CourseApi = require('../api/courseApi');

var CoursesActions = {
	createCourse: function(course){
		var newCourse = CourseApi.saveCourse(course);

		//Dispatcher tells stores that Author was created
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_COURSE,
			course: newCourse
		});
	},
	updateCourse: function(course){
		var updatedCourse = CourseApi.saveCourse(course);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_COURSE,
			course: updatedCourse
		});
	},
	deleteCourse: function(id){
		CourseApi.deleteCourse(id);
		
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_COURSE,
			id: id
		});	
	},
	getAllCourses: function(){
		return CourseApi.getAllCourses();
	}
};

module.exports = CoursesActions;