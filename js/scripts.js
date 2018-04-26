$(document).ready(function () {
    $('<a href="#" class="open-menu"><span></span>Open Menu</a>').appendTo('#header');
    $('<span class="fader"/>').appendTo('#header');

    $('.open-menu').click(function () {
        $('body').toggleClass('menu-opened');
        return false;
    }); //btn-open-manu

    $('.fader').click(function () {
        $('body').removeClass('menu-opened');
    }); //fader

    $('.main-nav li').each(function () {
        if ($(this).find('ul').length) {
            $(this).prepend('<span class="opener"></span>');
            $(this).addClass('dropdown');
        }
    }); //main-nav-dropdown

    $('.main-nav .opener').click(function () {
        if ($(this).parent().hasClass('opened')) {
            $(this).parent().removeClass('opened');
            $(this).siblings('ul').stop().slideUp(300);
            $(this).css({
                transform: 'scaleY(1)'
            });
        } else {
            $(this).parent().addClass('opened').siblings('.opened').removeClass('opened').children('ul').stop().slideUp(300);
            $(this).css({
                transform: 'scaleY(-1)'
            });
            $(this).siblings('ul').stop().slideDown(300);
        };
        return false;
    }); //main-nav-accordion

    $('.img-to-bg').each(function () {
        if ($(this).find('> img').length) {
            $(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
        };
    }); //img-to-background

    $('.slick-item').slick();
    
    
    function initialize() {
    	var latlng = new google.maps.LatLng(26.655153, -80.237969);
    	var myOptions = {
    		zoom: 10,
    		center: latlng,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};
    	var map = new google.maps.Map(document.getElementById("map"),
    		myOptions);
    }
    initialize();
    //scroll-to
    	$('.go-to').on('click',function (e) {
    		var href = $(this).attr("href"),
    		offsetTop = href === "#" ? 0 : $(href).offset().top;
    		$('html, body').stop().animate({
    			scrollTop: offsetTop 
    		}, 300);
    		return false;
    	});
    
}); //document-ready
