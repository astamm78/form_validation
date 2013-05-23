$(document).ready(function() {
    var val_email = /\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3}/;
    var pass_length = /.{8,}/;
    var pass_cap = /[A-Z]+/;
    var pass_num = /[0-9]+/;
    $('form').submit(function(event) {
        $("ul#errors").empty();
        event.preventDefault();
        var email = $('form input[name=email]').val();
        var password = $('form input[name=password]').val();
        if (!val_email.test(email)) {
            $("ul#errors").append('<li>Must be a valid email address</li>');
        }
        if (!pass_length.test(password)) {
            $("ul#errors").append('<li>Password must be at least 8 characters long</li>');
        }
        if (!pass_cap.test(password)) {
            $("ul#errors").append('<li>Password must have at least one capital letter</li>');
        }
        if (!pass_num.test(password)) {
            $("ul#errors").append('<li>Password must have at least one numeric character (0-9)</li>');
        }
        if ($('ul#errors li').length === 0) {
            $(this).submit();
        }
    });
});
