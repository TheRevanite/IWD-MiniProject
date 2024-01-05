document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerText = `Thanks for subscribing! We'll send newsletters to ${email}.`;
    document.getElementById('subscribeForm').reset();
});