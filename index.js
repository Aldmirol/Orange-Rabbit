let showForm = function() {
    if (document.querySelector('.name__value').value === "" ||
    document.querySelector('.email__value').value === "") {
        alert('Please, complete the form');
    } else {
        alert('Your name:' + document.querySelector('.name__value').value +
            '  Your email address:' + document.querySelector('.email__value').value +
            '  Your message:' + document.querySelector('.message__value').value);
    }
};