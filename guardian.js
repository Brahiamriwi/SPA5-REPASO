const auth = sessionStorage.getItem("auth");
if(auth != "true"){
    window.location ="./login.html";
}