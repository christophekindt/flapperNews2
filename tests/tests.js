var test = require('tape');
var request = require('supertest');
var app = require('../app');

test('Add a post', function(t){
	var post = {
		title:"Test post",
		link:"This is a test post"
	}
	request(app)
	.send(post)
	.expect({success:true})
	.end(function(err,res){
		t.error(err , 'No error');
		t.end();
	});
});

test('Incerment upvotes', function(t){
	var post = {
		title:"Test post",
		link:"This is a test post",
		upvotes:10
	}
	post.upvotes += 1
	request(app)
	.send(post)
	.expect({success:true})
	.end(function(err,res){
		t.error(err , 'No error');
		t.end();
	});
});
