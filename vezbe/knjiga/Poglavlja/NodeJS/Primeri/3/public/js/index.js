document.addEventListener('DOMContentLoaded', function() { 
    const form = document.getElementById('getForm');

    form.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        if (username === '') {
            window.alert('Korisničko ime mora biti popunjeno!');
            event.preventDefault();
            return false;
        }

        if (username.length !== 7 || 
            username.charAt(0) !== 'm' || 
            (username.charAt(1) !== 'i' &&
            username.charAt(1) !== 'r') ||
            Number.parseInt(username.substr(2, 5)) === null) {
            
            window.alert('Korisničko ime nije u ispravnom formatu!');
            event.preventDefault();
            return false;
        }

        const password = document.getElementById('password').value;
        if (password === '') {
            window.alert('Lozinka mora biti popunjena!');
            event.preventDefault();
            return false;
        }
    });
});