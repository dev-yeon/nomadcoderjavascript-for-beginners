const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

// if(condition) {
//     /// condition === true
//     // 조건이 참이면 이 코드가 실행됨
// } else {
//     /// condition === false딧ㄷ
//     // 조건이 거짓이면 이 코드가 실행됨
// }

if(isNaN(age)) {
    /// condition === true
    // 조건이 참이면 이 코드가 실행됨
    console.log("Please write a number");
} else {
    /// condition === false
    // 조건이 거짓이면 이 코드가 실행됨
    console.log(parseInt(age));
    console.log("Thank you for writing your age");
}