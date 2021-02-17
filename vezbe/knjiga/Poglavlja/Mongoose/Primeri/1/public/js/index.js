$(document).ready(function () {
    
    $("#postForm").submit(function () { 
        const username = $("#username").val();
        if (username === '') {
            window.alert('Korisničko ime mora biti popunjeno!');
            return false;
        }
        if (username.length !== 7 || 
            username.charAt(0) !== 'm' || 
            (username.charAt(1) !== 'i' &&
            username.charAt(1) !== 'r') ||
            Number.parseInt(username.substr(2, 5)) === null) {
            window.alert('Korisničko ime nije u ispravnom formatu!');
            return false;
        }

        const password = $("#password").val();
        if (password === '') {
            window.alert('Lozinka mora biti popunjena!');
            return false;
        }
    });

});