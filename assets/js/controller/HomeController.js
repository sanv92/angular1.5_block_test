'use strict';

var HomeController = function ($scope, HomeDataService) {

    $scope.articles = [];
    HomeDataService.loadBlogData().then(function(result){
        $scope.articles = result;
    });

};

HomeController.$inject = ['$scope', 'HomeDataService'];

app.filter('sanitize', ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
}]);

app.directive('ratingDirective', function() {
    return {
        restrict: 'CE',
        scope: {
            article: '='
        },
        templateUrl: 'assets/view/ratingDirective.html',
        link: function (scope, element) {

            scope.incRate = function (article) {
                article.voting = article.voting + 1;
                if (article.voting > 10) {
                    article.voting = 10;
                }
            };

            scope.decRate = function (article) {
                article.voting = article.voting - 1;
                if (article.voting < 0) {
                    article.voting = 0;
                }
            };
        }
    };
});

app.service('HomeDataService', ['$q', function ($q) {
    var preloadBlogData = function () {
        var blogData = [
            {
                articleID: 100,
                heading: 'Heading One 1',
                description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>' +
                '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
                tags: ['#tag1', '#tag2', '#tag3'],
                voting: 0
            },
            {
                articleID: 200,
                heading: 'Heading Two 2',
                description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>' +
                '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
                tags: ['#tag1', '#tag2', '#tag3'],
                voting: 1
            },
            {
                articleID: 300,
                heading: 'Heading Three',
                description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>' +
                '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
                tags: ['#tag1', '#tag2', '#tag3'],
                voting: 9
            },
            {
                articleID: 400,
                heading: 'Heading Four',
                description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>' +
                '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
                tags: ['#tag1', '#tag2', '#tag3'],
                voting: 10
            }
        ];

        var deferred = $q.defer();
        deferred.resolve(blogData);
        return deferred.promise;
    };
    return {
        loadBlogData: preloadBlogData
    }
}]);