
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBqd7lU9k25S9M27ju6Besp0rmWOnYbfEw",
      authDomain: "class-93-6b380.firebaseapp.com",
      databaseURL: "https://class-93-6b380-default-rtdb.firebaseio.com",
      projectId: "class-93-6b380",
      storageBucket: "class-93-6b380.appspot.com",
      messagingSenderId: "576731499080",
      appId: "1:576731499080:web:c0597979032d47d720267d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
