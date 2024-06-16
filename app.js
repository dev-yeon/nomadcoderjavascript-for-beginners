// const loginForm = document.getElementById("login-form");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick() {
    // console.dir(loginInput);
    // console.log(loginInput.value);
    // console.log("Click!!!!!!");

    const username = loginInput.value;
    console.log(username);
    // if(username === "") {
    //     alert("Please write your name."); 

    // } else if(username.length) {
    //     alert("Your name is too long.")
    // }
}


loginButton.addEventListener("click", onLoginBtnClick)