$(document).ready(function() {
    $('#list').click(function(event) {
        event.preventDefault();
        $('#products .item').removeClass('grid-item').addClass('list-item');
    });
    $('#grid').click(function(event) {
        event.preventDefault();
        $('#products .item').removeClass('list-item').addClass('grid-item');
    });
});
(function() {

	"use strict";

	var Appilo_SEO_2 = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
            Seo2MobileMenu: function (){
                $('.seo-2-open_mobile_menu').on("click", function() {
                    $('.seo-2-mobile_menu_wrap').toggleClass("mobile_menu_on");
                });
                $('.seo-2-open_mobile_menu').on('click', function () {
                    $('body').toggleClass('mobile_menu_overlay_on');
                });
                if($('.seo-2-mobile_menu li.dropdown ul').length){
                    $('.seo-2-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                    $('.seo-2-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
                        $(this).prev('ul').slideToggle(500);
                    });
                }
            },
        }
    }
    jQuery(document).ready(function (){
        Appilo_SEO_2.init();
    });
    
    })();
    function toggleSearch() {
        const btn = document.querySelector('.search-btn');
        btn.classList.toggle('expanded');
    }