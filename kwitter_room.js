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

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
 
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding Room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name "+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
  document.getElementById("output").innerHTML+=row;
 });});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}