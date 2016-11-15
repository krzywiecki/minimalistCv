$(document).ready(function() {
    $cvContainer = $('.cv-container');
    function centerCvContainer() {
        $cvContainer.css({
            'width': $cvContainer.outerWidth(),
            'height': $cvContainer.outerHeight(),
            'marginTop': ($(window).height() - $cvContainer.height()) / 2
        });
        $cvContainer.fadeIn();
    };

    centerCvContainer();
    setTimeout(function() {
        $('.github-buttons').fadeIn();
    }, 2000);

    $(window).on('resize', function() {
        centerCvContainer();
    });
});