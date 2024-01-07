// File: script.js
document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.createElement('p');
    greeting.textContent = 'Halo! Selamat datang!';
    document.querySelector('main section').appendChild(greeting);
});
