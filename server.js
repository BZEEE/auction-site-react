//******************************************** */
// server-side functionality for auction site
//******************************************** */
var firebase = require('firebase');
var googleAuthProvider = new firebase.auth.GoogleAuthProvider();


//**********************************Authentication************************************** */
//---------------------------------------------------------------------------------------//

// sign-in user with standard email and password
firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
    // successfull sign-in

}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

// sign-in user with google
firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

// sign-out user
firebase.auth().signOut().then(function() {
    // Sign-out successful.
}).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});