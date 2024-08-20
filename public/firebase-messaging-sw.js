// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAeLkkug45n12jHuXbiejbdVnJfDY8PFnA",
    authDomain: "bathguardduck.firebaseapp.com",
    projectId: "bathguardduck",
    storageBucket: "bathguardduck.appspot.com",
    messagingSenderId: "541742638673",
    appId: "1:541742638673:web:a3e681348e0ae1926fba70",
    measurementId: "G-6N151G1YXV"
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "./logo.png",
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
