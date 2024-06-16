// const title = document.getElementsByTagName("h1");
//.getElementsByClassName("hello");
// const title = document.querySelector(".hello h1");

//만약 전부 불러오게 하고 싶었다면?
// const title = document.querySelectorAll(".hello h1");
// const title = document.querySelector(".hello h1:first-child"); 
// const titleid = document.querySelector("#hello"); 
// const title = document.getElementById("hello");

// // console.log(idselector);
// // console.log(titleid);
// console.log(title);


// querySelector 는 CSS selector을 사용해서 검색 할 수 있다. 
// 

const title = document.querySelector(".hello h1");

title.innerText = "Hello";

// querySelector 는 CSS selector을 사용해서 불러오고.
// 그 안의 내용을 바꿔치기함