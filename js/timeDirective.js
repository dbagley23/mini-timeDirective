var app = angular.module('timeApp');
app.directive('showTime', function(){
  return {
	  restrict: 'E',
	  template: '<div>The current time is {{time}}</div>',
	  link: function(scope, element, attrs){
	  var currentTime = new Date();
	  scope.time = currentTime.toString();	  
	  }
  }
});
  app.directive('afterClass', function(){
  return {
	  restrict: 'E',
	  template: '<h1>After class, let us go {{activity}}</h1>',
	  link: function(scope, element, attrs){
	  scope.activity= 'hitting';	  
	  }
  }

});

  app.directive('myImage', function(){
  return {
	  restrict: 'E',
	  template: '<div><img src="{{image}}" style="width: 75%;" /img></div>',
	  link: function(scope, element, attrs){
	  scope.image= 'images/korden 07.jpg';	  
	  }
  }

});

