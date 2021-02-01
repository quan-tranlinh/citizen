// Anchor link smooth
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    var offsetSize = $("header").innerHeight() + 5;
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 900);
});
