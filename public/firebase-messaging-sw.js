importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCCdzSomMFIfknGj7vFLmi6-LKNUIRH9Cw",
    authDomain: "kakituapp.firebaseapp.com",
    projectId: "kakituapp",
    storageBucket: "kakituapp.firebasestorage.app",
    messagingSenderId: "182315326234",
    appId: "1:182315326234:web:7e7eddbe753f0989d92aa3",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message", payload);

  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: "/icon.png",
  });
});
