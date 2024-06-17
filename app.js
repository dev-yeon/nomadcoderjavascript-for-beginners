
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();   // 기본 동작은 실행되지 않도록 막아주고. 
 
    loginForm.classList.add(HIDDEN_CLASSNAME); //hidden 이라는 class name을 더해줘서 form 을 숨기고.
    const username = loginInput.value;  //유저의 이름을 변수로 저장해 주고, 그 이름은 h1안에 넣어주기
                                        // h1 안에다가 greeting 에 있는 텍스트를 추가하기
    greeting.innerText = "Hello " + username;     
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    console.log(username); 


}


loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    //  savedUsername 의 값이 null 이라면, 
    //  form 의 hidden class 명을 지워줄 거다. 
    // 왜냐면 지금은 form 와 h1모두 hidden 이라는 class를 갖고 시작하기 떄문. 

} else {
    // show the greetings
    greeting.innerText = `hello ${savedUsername}`; //greeting 안에 텍스트 추가 
    greeting.classList.remove(HIDDEN_CLASSNAME); //그 뒤, greeting 한테서 HIDDEN_CLASSNAME 을 제거 
    
}