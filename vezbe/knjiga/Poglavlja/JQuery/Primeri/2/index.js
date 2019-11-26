$(document).ready(function () {
    $('#help_box').delay(2000).slideDown(1000);
    $('.close').on('click', function () {
        $('#help_box').slideUp(1000);
    });
});