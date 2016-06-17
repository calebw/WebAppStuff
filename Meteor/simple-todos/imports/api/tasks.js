import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

if(Meteor.isServer){
	//Runs on server
	Meteor.publish('tasks', function tasksPublication(){
		return Tasks.find({
			$or: [
				{private: {$ne: true}},
				{owner: this.userId}
			]
		});
	});
}

Meteor.methods({
  'tasks.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'tasks.remove'(taskId) {
    check(taskId, String);

    const task = Tasks.findOne(taskId);
    if(task.private && task.owner !== this.userId){
    	throw new Meteor.Error('not-authorized');
    }

    Tasks.remove(taskId);
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    const task = Tasks.findOne(taskId);
    if(task.private && task.owner !== this.userId){
    	throw new Meteor.Error('not-authorized');
    }

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
  'tasks.setPrivate'(taskId, setToPrivate){
  	check(taskId, String);
  	check(setToPrivate, Boolean);

  	const task = Tasks.findOne(taskId);
  	if(task.owner !== this.userId){
  		throw new Meteor.Error('not-authorized');
  	}
  	Tasks.update(taskId, {$set: {private: setToPrivate}});
  }
});

