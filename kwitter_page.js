//Firebase Links
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTfkKN9XqoiInppgvXNRGp-YRgMh9s1ns",
  authDomain: "let-s-chat-c7dd8.firebaseapp.com",
  databaseURL: "https://let-s-chat-c7dd8-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-c7dd8",
  storageBucket: "let-s-chat-c7dd8.appspot.com",
  messagingSenderId: "854117070576",
  appId: "1:854117070576:web:af3dd7ee6f28b54d07b435"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
   //user_name=localStorage.getItem("user_name");
   //document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
   
 function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding Room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
  
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").innerHTML="";
}
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
  //Start code
  console.log(firebase_message_id);
  console.log(message_data);

  username=message_data['name'];
  message=message_data['message'];
  like=message_data['like'];

  name_with_tag="<h4>"+ username + "<img class= 'user_tick' src='tick.png' ></h4>";
  message_with_tag="<h4 class='message_h4' >"+message+"</h4>";
  like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
  span_with_tag=" <span class='glyphicon glyphicon-thumbs-up' >Like "+ like +"</span></button><hr>";

  row=name_with_tag+message_with_tag+like_button+span_with_tag;
  document.getElementById("output").innerHTML+=row;
  //End code
  } });  }); }
  getData(); 