importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-messaging.js');


firebase.initializeApp({
     'messagingSenderId': '974436104310'
});

const messaging = firebase.messaging();