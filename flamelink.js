
const config = {
  apiKey: "AIzaSyAv9yGgMWcNDlX8loyOEta8GTS_wZGHkp4",
  authDomain: "karachivynz-3f361.firebaseapp.com",
  databaseURL: "https://karachivynz-3f361.firebaseio.com",
  projectId: "karachivynz-3f361",
  storageBucket: "karachivynz-3f361.appspot.com",
  messagingSenderId: "142377060579"
};

/*const app = flamelink({
  apiKey: "AIzaSyAv9yGgMWcNDlX8loyOEta8GTS_wZGHkp4",
  authDomain: "karachivynz-3f361.firebaseapp.com",
  databaseURL: "https://karachivynz-3f361.firebaseio.com",
  projectId: "karachivynz-3f361",
  storageBucket: "karachivynz-3f361.appspot.com",
  messagingSenderId: "142377060579"
});*/
const firebaseApp = firebase.initializeApp(config);

var email = 'karachivynz18@gmail.com';
var password = 'superuser321';
var authService = firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(success) {
    console.log(success);
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

const app = flamelink({firebaseApp, authService});

app.content.get('newsAndUpdates')
  .then(function(newsAndUpdates){
    console.log(newsAndUpdates);
    callback(newsAndUpdates);
  })
  .catch(function(error){
    console.log(error);
  });
function getData(callback) {
  app.content.get('newsAndUpdates')
    .then(function(newsAndUpdates){
      console.log(newsAndUpdates);
      callback(newsAndUpdates);
    })
    .catch(function(error){
      console.log(error);
    });
}

function createUser() {
  const hash = md5(userCreateData.email);
  app.content.set('user', hash,userCreateData)
    .then(function(){console.log('Setting the entry succeeded')} )
    .catch(function(err){
      console.log(err);
      console.error('Something went wrong while setting the entry.')});
}

const userCreateData = {
  firstName: 'dani',
    lastName: 'usmani',
  dateOfBirth:'17/07/1993',
  createAt: Date.now(),
  updatedAt: Date.now(),
  facebook: {},
  email: 'usmanidaniyal123@gmail.com',
    additionalDetail: 'Test Details',
  gender:'Male'
}