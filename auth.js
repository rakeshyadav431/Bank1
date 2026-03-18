function login(){
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(()=>{
      loginDiv.style.display="none";
      app.style.display="block";
    })
    .catch(e=>alert(e.message));
}

function logout(){
  firebase.auth().signOut();
  location.reload();
}
