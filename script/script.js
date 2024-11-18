$(document).ready(function () {
    // navigation page

    $(".fa-arrow-up , button").click(function () {
        $('html, body').animate({
            scrollTop: $("#demo").offset().top
        }, 1000);
    });
    
});
