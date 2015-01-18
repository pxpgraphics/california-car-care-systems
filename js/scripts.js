// Scroll to top.
$(document).ready(function() {
    $('.footer-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })
});
