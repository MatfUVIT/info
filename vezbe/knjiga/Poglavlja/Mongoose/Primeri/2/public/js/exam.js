$(document).ready(function() {
    $('#create').submit(function(e) {
        const newUsername = $("#username").val();
        if (newUsername === '') {
            window.alert('Korisničko ime mora biti popunjeno!');
            return false;
        }
        if (newUsername.length !== 7 || 
            newUsername.charAt(0) !== 'm' || 
            Number.parseInt(newUsername.substr(2, 5)) === null) {
            window.alert('Korisničko ime nije u ispravnom formatu!');
            return false;
        }

        const newSubject = $("#subject").val();
        if (newSubject === '') {
            window.alert('Predmet mora biti popunjeno!');
            return false;
        }

        const newDate = $("#date").val();
        if (newDate === '') {
            window.alert('Datum mora biti odabran!');
            return false;
        }

        const newGrade = $("#grade").val();
        if (newGrade === '') {
            window.alert('Ocena mora biti popunjeno!');
            return false;
        }
    });
});