//함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
//값을 미리 만들어 두지 않음 
//다른 작업을 하다가 다시 돌아와서 next()해주면 멈췄던 부분부터 이어서 실행

// function* fn() {  //function 옆에 *을 써서 만듦
//     yield 1; //yield 키워드로 함수실행 멈춤
//     yield 2;
//     yield 3;
//     return "finish";
// }

// const a = fn(); //generator 반환

//ex
// function* fn() {  
//     try {
//     console.log(1); 
//     yield 1; //value 값
//     console.log(2);
//     yield 2;
//     console.log(3);
//     console.log(4);
//     yield 3;
//     return "finish";
//     } catch(e) {
//         console.log(e);
//     }
// }

// const a = fn();


//iterable - 반복이 가능한
//조건 - symbol.iterator 메서드 존재, Symbol.iterator는 iterator을 반환
//iterator - next 메서드를 가짐, next 메서드는 value와 done속성을 가진 객체를 반환, 작업이 끝나면 done은 true가 됨

// function* fn() {
//     yield 4;
//     yield 5;
//     yield 6;
// }

// const a = fn();

// for(let num of a) {
//     console.log(num);
// }

// function* fn() {
//     const num1 = yield "첫번째 숫자를 입력해주세요";
//     console.log(num1);

//     const num2 = yield "두번째 숫자를 입력해주세요";
//     console.log(num2);
//     return num1 + num2;
// }

// const a = fn();

// function* fn() {
//     let index = 0;
//     while(true) {   //필요한 값만 그때그때 생성하기에 break없는 while문도 가능한 것
//         yield index++;
//     }
// }

// const a = fn();

//yield*로 다른 함수 불러오기
function* gen1() {
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2() {
    yield "Hello";
    yield* gen1();
    yield "!";
}

console.log(...gen2()); //...구조분해할당을 사용해서 for of 와 마찬가지로 값을 펼침