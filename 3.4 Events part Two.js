
const title = document.querySelector("div.hello:first-child h1"); 

console.dir(title);

function handleTitleClick() { 
    title.style.color = "blue";
}

function handleMouseEnter() { 
    console.log("mouse is here!")
}

title.addEventListener("click" , handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);