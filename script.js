function register(){
  const email = document.getElementById("email").value.trim();

  if(!email || !email.includes("@")){
    alert("Enter valid email");
    return;
  }

  // Save locally (optional)
  localStorage.setItem("registeredEmail", email);

  // Save to Firebase (THIS is your visitor list)
  db.collection("visitors").add({
    email: email,
    time: new Date().toISOString()
  });

  document.getElementById("loginBox").style.display = "none";
}
