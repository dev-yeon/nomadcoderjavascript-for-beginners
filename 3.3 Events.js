const title = document.querySelector("div.hello:first-child h1");

// title.innerText = "Hello";

// console.dir(title);
// title.style.color = "blue"

function handleTitleClick(){
    console.log("title was clicked!");
}

title.addEventListener("click" ,handleTitleClick );
// 여기 handleTitleClick()을 넣지 않는게 정말~~~ 중요하다. 

//JS에 function 만을 넘겨주고, 유저가 Click할때,  JS가 실행버튼을 대신 눌러주기를 바라는것. 