(global => {
    'use strict';
    
    

    /*beginGlobals*/
    const App = global.App;
    /*endGlobals*/

    console.log('App===>', App);

    /*beginCommonFunction*/
    const $ = App.$;
    //console.log($);
    /*endCommonFunction*/

    
    
    $('a').on('click', function() {
        $(this).hide();
    });
    //$('a').on('click');
})(window);