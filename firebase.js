const firebaseConfig = {
  databaseURL: "https://formwithemail-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyBDEwfYdcpGGQ76_eRo9ixrS0uHSQGKVvg",
  authDomain: "formwithemail.firebaseapp.com",
  projectId: "formwithemail",
  storageBucket: "formwithemail.appspot.com",
  messagingSenderId: "204385044709",
  appId: "1:204385044709:web:25276226a94bd664886c0c",
  measurementId: "G-P9KEVCVWJJ"
};
firebase.initializeApp(firebaseConfig);
var analysisdb=firebase.database().ref("formwithemail");
document.getElementById("analysis").addEventListener("submit",submitform);


function submitform(e){
  e.preventDefault();
  var user_name = document.getElementById("uname").value;
  var con_email = document.getElementById("email").value;
  var con_phn = document.getElementById("con-ph").value;

  if (user_name.trim() == null || user_name.trim() == "") {
    alert("Please enter user name!!");
  } else if (con_phn.trim() == null || con_phn.trim() == "") {
    alert("Please enter valid phone number!");
  } else if(isNaN(con_phn)) {
    alert("Please enter valid phone number!");
  }else {

             saveinfo(user_name, con_email,con_phn);
             document.getElementById("analysis").reset();
             window.location.href="form.html";

  }
}
const saveinfo=(user_name, con_email,con_phn) =>{
  var newform=analysisdb.push();
  newform.set({
          user_name : user_name,
          con_email : con_email,
          con_phn :con_phn,
  });
}

function show(){
var stdNo=0;
var userDataRef = firebase.database().ref("formwithemail").orderByKey();
userDataRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();              // childData will be the actual contents of the child
      var e_text = childSnapshot.val().user_name;
      var u_name=  childSnapshot.val().con_email;
      var e_ph=childSnapshot.val().con_phn;

      var tbody=document.getElementById('tbody');
      var trow=document.createElement('tr');
      var td1=document.createElement('td');
      var td2=document.createElement('td');
      var td3=document.createElement('td');
      var td4=document.createElement('td');


      td1.innerHTML=++stdNo;
      td2.innerHTML=u_name;
      td3.innerHTML=e_text;
      td4.innerHTML=e_ph;

      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4);
      tbody.appendChild(trow);


 });


 });
}



