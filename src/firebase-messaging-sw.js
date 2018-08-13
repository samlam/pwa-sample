importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
apiKey: "AIzaSyC0mezpr2QxUKu_u8uL2e_-KMs3RuOHr20",
authDomain: "test-pwa-f9a82.firebaseapp.com",
databaseURL: "https://test-pwa-f9a82.firebaseio.com",
projectId: "test-pwa-f9a82",
storageBucket: "test-pwa-f9a82.appspot.com",
messagingSenderId: "940756647384"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});