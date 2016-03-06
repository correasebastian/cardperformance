var x;
angular.module('starter.services', [])

.directive('myBackgroundImage', function() {
    return function(scope, element, attrs) {
        element.css({
            'background-image': 'url(' + attrs.myBackgroundImage + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
        });
    };
})

.directive('scmImg', function() {
        return function(scope, element, attrs) {
            var s = element.find('ion-spinner')
            element.find('img').on('load', function(e) {
                console.log('load');
                s.css({ 'display': 'none' })
                    //no se necesita apply por que es una propiedad css, parece que es por eso
                    // scope.$apply()
            })
        };
    })
    .directive('scmImgComplete', scmImgComplete);


/* @ngInject */
function scmImgComplete() {
    // Usage:
    //
    // Creates:
    //
    var directive = {

        link: link,
        template: [
            '<ion-spinner class="scm-spinner"></ion-spinner>',
            '<img >'
        ].join(''),
        restrict: 'A'

    };
    return directive;

    function link(scope, element, attrs) {
        console.log(attrs)
        var s = element.find('ion-spinner');
        var delay = parseInt(attrs.index * 200);
        console.log(delay)
        var jqImg = element.find('img');
        setTimeout(function() {
                jqImg.prop('src', attrs.imgUrl)
                jqImg.on('load', function(e) {
                    console.log('load');
                    s.css({ 'display': 'none' })
                        //no se necesita apply por que es una propiedad css, parece que es por eso
                        // scope.$apply()
                })
            },
            delay)


        // x = jqImg;
        /*  .on('load', function(e) {
              console.log('load');
              s.css({ 'display': 'none' })
                  //no se necesita apply por que es una propiedad css, parece que es por eso
                  // scope.$apply()
          })*/

    }
}
