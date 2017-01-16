'use strict';

angular.module('blogList').
component("blogList", {
    // template: "<div><h1>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
    templateUrl: "/templates/blog-list.html",
    controller: function($scope) {
        console.log("hello")
        $scope.title = "hi there"
        $scope.click = 0

        $scope.someClickTest = function() {
            console.log("someClickTest")
            $scope.click += 1
            $scope.title = "some Click " + $scope.click + " times"
        }
    }
});
