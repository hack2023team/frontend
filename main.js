function page_setup(){
    // Contains general page setup code such as the NAV
    $('#navbar-wrapper').load('components/nav.html', function(){
        $(".navbar-burger").click(function() {
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        });
    });
}