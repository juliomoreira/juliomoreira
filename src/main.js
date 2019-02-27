/**
* Author: Julio Moreira
* Email : juliomindigo@gmail.com
* Github: @juliomoreira
*/

$(document).ready(function(){

    var $header   = $('.header'),
        $closeBtn = $('.menu-handler_close');

    $closeBtn.on( 'click', function( $event ){
        $event.preventDefault();
        if ( window.location.hash ) {
            if( window.location.hash === '#!/menu' ){
                window.history.back();
            } else {
                window.location = window.location.hash;
            }
        } else {
            window.scroll( 0, $(document).scrollTop() - $header.height() );
        }
    });

    $(window).scroll(function(){
        if( $(document).scrollTop() > 128 ) {
            if( !$header.hasClass( 'fixed' ) ) {
                $header.addClass( 'fixed' );
            }
        } else {
            if( $header.hasClass( 'fixed' ) ) {
                $header.removeClass( 'fixed' );
            }
        }
    });

/*

    $(window).scroll(function(){

        if ( $(document).scrollTop() < $header.height() && window.location.hash !== '#!/menu' ) {

            window.location.hash = '!/menu';

        }

        if ( $(document).scrollTop() >= $header.height() && window.location.hash == '#!/menu' ) {

            window.location.hash = '!/';

        }

    });

*/

});

$(window).load( function(){
    resize_pages();
}).resize(function(){
    //resize_pages();
});

function resize_pages () {

    if( $('.screen-size').css('content') == 'small' ){

        $('.page').css({ 'height' : $(this).height() + 56, 'min-height' : $(this).height() + 56 });

    }

}

/*

$(window).load(function(){

    var $header         = $('.header'),
        $morphing_point = 128;

    $(window).scroll(function(){

        if ( window.location.hash !== '!/menu' ) {

            if( $(document).scrollTop() > $header.height() ) {

                console.log('scroll is higher');

                if ( window.location.hash == '!/menu' ) {

                    window.location.hash = '';
                    
                }
                
                if( !$header.hasClass( 'fixed' ) ) {
                    //$header.addClass( 'fixed' );
                }

            } else {

                console.log('scroll is lower');

                if ( !window.location.hash ) {

                    window.location.hash = '!/menu';

                }

                if( $header.hasClass( 'fixed' ) ) {
                    //$header.removeClass( 'fixed' );
                }
            }

        }

    });
    
    $("body").panelSnap({
        slideSpeed           : 250,
        keyboardNavigation   : {
            enabled          : true,
            nextPanelKey     : 40,
            previousPanelKey : 38,
            wrapAround       : false
        },
        onActivate           : function( $target ){
            
            if ( $target.hasClass( 'page_home' ) ) {

                $( '.menu__link.active' ).removeClass('active');

            } else if ( $target.hasClass( 'page_about' ) ) {

                if( !$( '.menu__link_about' ).hasClass( 'active' ) ) {
                    $( '.menu__link.active' ).removeClass('active');
                    $( '.menu__link_about' ).addClass('active');   
                }

            } else if ( $target.hasClass( 'page_works' ) ) {

                if( !$( '.menu__link_works' ).hasClass( 'active' ) ) {
                    $( '.menu__link.active' ).removeClass('active');
                    $( '.menu__link_works' ).addClass('active');   
                }

            } else if ( $target.hasClass( 'page_blog' ) ) {

                if( !$( '.menu__link_blog' ).hasClass( 'active' ) ) {
                    $( '.menu__link.active' ).removeClass('active');
                    $( '.menu__link_blog' ).addClass('active');   
                }

            } else if ( $target.hasClass( 'page_contact' ) ) {

                if( !$( '.menu__link_contact' ).hasClass( 'active' ) ) {
                    $( '.menu__link.active' ).removeClass('active');
                    $( '.menu__link_contact' ).addClass('active');   
                }

            }

        }
    });

    $('.employers-carousel').carouFredSel({
        responsive : true,
        infinite   : false,
        circular   : false,
        swipe      : true,
        mousewheel : true,
        auto    : false,
        scroll : {
            fx : 'crossfade'
        },
        prev    : { 
            button  : ".carousel__nav_prev",
            key     : "left"
        },
        next    : { 
            button  : ".carousel__nav_next",
            key     : "right"
        }
    });

});



    */