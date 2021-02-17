$(document).ready(function () {

    $("#patch").submit(function (e) { 
        const newUsername = $("#username").val();
        if (newUsername === '') {
            window.alert('Korisničko ime mora biti popunjeno!');
            return false;
        }
        if (newUsername.length !== 7 || 
            newUsername.charAt(0) !== 'm' || 
            (newUsername.charAt(1) !== 'i' &&
            newUsername.charAt(1) !== 'r') ||
            Number.parseInt(newUsername.substr(2, 5)) === null) {
            window.alert('Korisničko ime nije u ispravnom formatu!');
            return false;
        }

        const newName = $("#name").val();
        if (newName === '') {
            window.alert('Ime mora biti popunjeno!');
            return false;
        }

        const newMajor = $("#major").val();
        if (newName === '') {
            window.alert('Oblast mora biti popunjena!');
            return false;
        }
    });
});