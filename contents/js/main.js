!function (a) {
    "use strict";
    let anchorSelector = 'a[href^="#"]';
    /*Mobile menu selected to close menu*/
    $("#bs-example-navbar-collapse-1 ul li").click(function () {
        $("#bs-example-navbar-collapse-1").removeClass("in");
    });

    $(anchorSelector).on('click', function (e) {

        e.preventDefault();
        let destination = $(this.hash);

        let scrollPosition
            = destination.offset().top;


        let animationDuration = 500;
        $('html, body').animate({
            scrollTop: scrollPosition
        }, animationDuration);
    });



    $("#js-grid-juicy-projects").on('initComplete.cbp', function() {
    	$(".cbp-l-loadMore-button").css({"visibility": "visible", "opacity": "1", "transition-delay": "0s"});
	}   );


}(this);
