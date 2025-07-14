const enviar = document.getElementById('enviar');
const APP_URL = "http://localhost:3000/";
enviar.addEventListener('click', function () {

    auth()
});

async function auth() {
    try {
       const email = document.getElementById('email');
       const password = document.getElementById('password') ;
       const res = await fetch(APP_URL + "users");
       const users = await  res.json();
        users.forEach(user => {
             if((email.value == user.email || email.value == user.username) && (password.value == user.password)){
                 sessionStorage.setItem("auth", "true");
                 localStorage.setItem("auth", "true");
                 window.location = "./home.html";
             }else{
                console.error("credenciales erroneas");
             }
             console.log(user.password)
        });
    } catch (error) {

    }
}
