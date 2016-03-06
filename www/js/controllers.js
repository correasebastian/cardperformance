var dash, ch;

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    dash = $scope;
    var arrayn = []

    for (var i = 0; i < 50; i++) {
        var obj = {
            title: 'uno',
            categoty: 'soccer',
            id: i,
            imageUrl: 'http://loremflickr.com/320/240?random=' + i
        }
        arrayn.push(obj)
    }

    $scope.arrayNews = arrayn;

})

.controller('ChatsCtrl', function($scope) {
    ch = $scope;
    var ix = 1;
    var arrayn = []
    $scope.loadMoreData = function() {
        console.log(ix, 'loadMoreData')
        var he = ix * 10 + 1;
        var min = arrayn.slice(he, he + 10);

        min.forEach(function(obj, i) {
            console.log(i, obj)
            $scope.arrayNews.push(obj)
        })

        ix++;
        $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.moreDataCanBeLoaded = function() {
        console.log(ix, 'moreDataCanBeLoaded')
        if (ix < 4)
            return true
        return false
    };



    for (var i = 0; i < 40; i++) {
        var obj = {
            title: 'uno',
            categoty: 'soccer',
            id: i,
            imageUrl: 'http://loremflickr.com/320/240?random=' + i
        }
        arrayn.push(obj)
    }

    var subArray = arrayn.slice(0, 10)


    $scope.arrayNews = subArray;
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    var arrayn = []

    for (var i = 0; i < 15; i++) {
        var obj = {
            title: 'uno',
            categoty: 'soccer',
            id: i,
            imageUrl: 'http://loremflickr.com/320/240?random=' + i
        }
        arrayn.push(obj)
    }

    $scope.arrayNews = arrayn;
});
