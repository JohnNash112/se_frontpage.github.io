$(document).ready(function() {
    $('#signin').click(function() {
        $('#signinModal').modal('show');
    });
    $('.close').click(function() {
        $('#signinModal').modal('hide');
    });
    $('#signup').click(function() {
        $('#signupModal').modal('show');
    });
    $('.close').click(function() {
        $('#signupModal').modal('hide');
    });
});