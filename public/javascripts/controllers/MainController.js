app.controller('MainCtrl', [
'$scope',
'posts',
'auth',
function($scope, posts, auth){

	$scope.posts = posts.posts;
	$scope.addPost = function() {
		if ($scope.title === '') { return; }
		posts.create({
			title: $scope.title,
			link: $scope.link,
			content: $scope.content
		});
		$scope.title = '';
		$scope.link = '';
		$scope.content = '';
	};

	$scope.deletePost = function(post) {
		posts.delete(post);
	};

	$scope.incrementUpvotes = function(post) {
		posts.upvote(post);
	};
}])