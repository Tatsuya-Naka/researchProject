document.querySelector('.email a').addEventListener('click', function(event) {
    event.preventDefault();
    sendEmail();
});

document.querySelector('.footerEmail a').addEventListener('click', function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    var email = 'ymktr0918gromin28@gmail.com';
    window.location.href = 'mailto:' + email;
}