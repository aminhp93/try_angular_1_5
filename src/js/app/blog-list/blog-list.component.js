'use strict';

angular.module('blogList').
component("blogList", {
    templateUrl: "/templates/blog-list.html",
    controller: function($scope, $routeParams) {

        console.log($routeParams.id)
        console.log("hello")

        var blogItems = [
            {title: "Some title1", id: 1, description: "this is a book1"},
            {title: "Some title2", id: 2, description: "this is a book2"},
            {title: "Some title3", id: 3, description: "this is a book3"},
            {title: "Some title4", id: 4, description: "this is a book4"},

        ]

        $scope.items = blogItems

        $scope.title = "hi there"
        $scope.click = 0

        $scope.someClickTest = function() {
            console.log("someClickTest")
            $scope.click += 1
            $scope.title = "some Click " + $scope.click + " times"
        }
    }
});
