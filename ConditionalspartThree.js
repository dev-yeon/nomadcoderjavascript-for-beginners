// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age)){
//     console.log("Please write a number");

// } else if(age < 18){
//     console.log("You are too young");

// } else if(age >= 18 && age <= 50){
//     console.log("You Can drink.");
// } else {
//     console.log("You can drink.");
// }

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age<0){
    console.log("Please write a real positive number");
} else if(age < 18){
    console.log("You are too young");
} else if(age >= 18 && age <= 50){
    console.log("You Can drink.");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age > 80) {
    console.log("You can do whatever you want.");
}

/// else 는 선택적 사항이다. 

true || true === true
false || true === true 
true || false === true 
false || false === false 

true && true === true 
false && true === false 
true && false === false 
false && false === false 