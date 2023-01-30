// 함수와 렉시컬 환경의 조합, 함수가 생설될 당시의 외부 변수를 기억, 생성 이후에도 계속 접근 가능

// 어휘적 환경(lexical environment)

// 1. one : 초기화X - 사용불가, addOne : function - 사용가능 (전역 lexical 환경경)
let one; // 2. one : undefined - 사용가능
one = 1; // 3. one : 1

function addOne(num) {
    console.log(one + num); // 변수찾기 : 내부 -> 외부 -> 전역
}

addOne(5); // 4. num : 5   (내부 lexical 환경, 전역 참조)

//ex
function makeCounter() {
    let num = 0; //은닉화

    return function() {
        return num++;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());