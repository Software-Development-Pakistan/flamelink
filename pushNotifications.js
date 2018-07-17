const config = {
    apiKey: "AIzaSyAv9yGgMWcNDlX8loyOEta8GTS_wZGHkp4",
    authDomain: "karachivynz-3f361.firebaseapp.com",
    databaseURL: "https://karachivynz-3f361.firebaseio.com",
    projectId: "karachivynz-3f361",
    storageBucket: "karachivynz-3f361.appspot.com",
    messagingSenderId: "142377060579"
};

const firebaseApp = firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BH7CCGvhOn3JkAeE0GzWEBYJ4qLUqh5rQiXtOviFuzaQ_0TRFZD0qe--oOTmlRYt66qeML2AjRLDkS9ARkToF_c");

//Permissions
messaging.requestPermission().then(function () {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
})
    .then(function () {
        messaging.getToken().then(function (currentToken) {
            if (currentToken) {
                console.log(currentToken);
                sendTokenToServer(currentToken);
                //   updateUIForPushEnabled(currentToken);
            } else {
                // Show permission request.
                console.log('No Instance ID token available. Request permission to generate one.');
                // Show permission UI.
                //updateUIForPushPermissionRequired();
                setTokenSentToServer(false);
            }
        });
    })
    .catch(function (err) {
        console.log('Unable to get permission to notify.', err);
    });


function sendTokenToServer(currentToken) {
    if (true){//(!isTokenSentToServer()) {
        console.log('Sending token to server...');
        // TODO(developer): Send the current token to your server.
        setTokenSentToServer(true);
    } else {
        console.log('Token already sent to server so won\'t send it again ' +
            'unless it changes');
    }
}

function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
}

messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);
    // ...
  });
  