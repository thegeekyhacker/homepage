// Get the username from the URL parameter
const params = new URLSearchParams(window.location.search);
const usernameParam = params.get('username');

// Use the retrieved usernameParam wherever you need it on this page
console.log('Username:', decodeURIComponent(usernameParam));
