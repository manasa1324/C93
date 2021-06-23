
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBy3STFQ3Hs8b5o1CLtjF2RRtZTKe4uqPQ",
      authDomain: "kwitter-35d53.firebaseapp.com",
      projectId: "kwitter-35d53",
      storageBucket: "kwitter-35d53.appspot.com",
      messagingSenderId: "149806952753",
      appId: "1:149806952753:web:895668b1b6371211f90010",
      measurementId: "G-NKZVGV5DMK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
