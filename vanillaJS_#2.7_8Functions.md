player.points(); 라고 사용하지 않았다. player.points은 function이 아니기 때문. player.points은 숫자다.
player에게 function을 주기 전에, 어떻게 function을 만드는지를 배워야 한다.
function은 내가 계속 반복해서 사용할 수 있는 코드 조각이다. 어떤 코드를 캡슐화 해서 실행을 여러번 할 수 있게 해준다.

function 선언 :
function 함수명() {
실행코드
}

funtion 실행 : 함수명();
argument(인수)를 보내야 하는데 인수란 함수를 실행하는 동안 어떤 정보를 함수에게 보낼 수 있는 방법이다.

펑션의 괄호 안의 매개변수에서 아규먼트를 받아들일 수 있다.
ex)
function sayHello(nameOfPerson) {
console.log(nameOfPerson);
}

sayHello("nico")
sayHello("dal")
sayHello("lynn") // nameOfPerson은 "nico" "dal" "lynn" 을 받았다고 생각하면 됨.


아규먼트는 하나만 받을 수 있는게 아니라 여러개를 받을 수 있음.
ex)
function sayHello(nameOfPerson , age) {
console.log(nameOfPerson);
}

sayHello("nico" , 12);
sayHello("dal" , 20);
sayHello("lynn" , 23); // sayHello function의 매개변수 2개는 아래 2개의 argument를 받는 중임.

function의 값은 function 안에서만 존재한다.

오브젝트 안에서 매개변수가 아규먼트를 받는 방식
ex)
const player = {
name : function(Name) {
console.log("Your Name is " + Name + " 입니다.")
} ,
sayHello : function(Age) {
console.log("Your age is " + Age + " 입니다." )
}
}

player.sayHello(14)
player.name("james")