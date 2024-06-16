console에서 document.title = "hi" 코드 한줄을 직접 작성한 후, 웹사이트의 title이 바뀌는 걸 보고 놀라서 입틀막을 하였다.



*혹시나 console.dir(document)와 console.log(document)의 차이가 헷갈리신다면 제가 찾아본 사이트를 참고하시면 좋을 것 같습니다.

https://jongbeom-dev.tistory.com/115

참고하신 사이트 및 직접 코드를 콘솔에 실행해보니 console.dir(document)와 console.log(document)의 차이점은 dir은 객체의 속성을 확인하고, log는 객체의 요소를 확인하는 거군요.

console에 document를 입력하면, 작성한 HTML을 가져올 수 있어.
document는 브라우저에 존재하는 object
console에 console.dir(document)를 호출해 보면, document.title이 HTML에서 정의한 title이랑 같다.
JS에서 HTML document 객체로 부터 title을 가져올 수 있다.
JS는 HTML에 접근하고 읽을 수 있게 설정되어 있어.
js를 통해 html를 바꿀 수도 있다. document.title = "HO";
모든 것들은 document로부터 시작해. web site를 의미하기 때문.
document.body를 호풀하면 body항목만 가지고 온다.