var g, h;
angular
    .module('starter.controllers')
    .constant('baseApiUrl', 'http://beta.esportudo.com/wp-json/wp/v2/')
    .constant('pageItems', 100)
    .controller('GazetaController', GazetaController);

GazetaController.$inject = ['$http', 'baseApiUrl', 'pageItems', '$ImageCacheFactory'];

/* @ngInject */
function GazetaController($http, baseApiUrl, pageItems, $ImageCacheFactory) {
    var vm = this;
    g = vm;
    h = $http;
    vm.cacheImage = cacheImage;
    var _allNews = [];
    vm.minDiv = true;
    vm.title = 'GazetaController';
    var _allNewsUrl = baseApiUrl + 'article?orderby=date&order=desc&per_page=' + pageItems;
    activate();

    ////////////////

    function activate() {
        getLatestArticles();
    }


    function getLatestArticles() {
        return $http.get(_allNewsUrl)
            .then(onGetLatestArticles)
            .catch(errorFn)

        function onGetLatestArticles(response) {
            console.log('getLatestArticles', response, response.data)
                // debugger;
            _allNews = response.data;
            vm.articles = _allNews;
            // return _allNews
        }


    }

    function errorFn(error) {
        console.error(error)
    }

    function cacheImage(bool) {
        var imgUrls = []

        _allNews.forEach(onF)

        function onF(article, i) {
            if (article.article_image_url[0] != '') {
                console.info(article.article_image_url[0]);
                imgUrls.push(article.article_image_url[0])
                if (bool) {
                    $http.get(article.article_image_url[0])
                        .then(function(response) {
                            console.log(response)
                        })
                        .catch(errorFn)
                }

            }
        }

        if (!bool) {
            $ImageCacheFactory.Cache(imgUrls).then(function() {
                    console.log("Images done loading!");
                })
                .catch(errorFn)
        }


    }
}
