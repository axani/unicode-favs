$(function() {

    var existing = 0;

    $('.content li').each( function() {
        existing++
    });

    for (var i = 0; i < (800 - existing); i++) {
        $('.content').append('<li class="empty">☒</li>');
    }

});