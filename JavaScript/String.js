//대소문자 전환 toUpperCase(), toLowerCase()
let desc = "Hi guys. Nice to meet you."

desc.toUpperCase();

//indexOf 문자의 위치 알려줌 0부터 시작
desc.indexOf('to');

if(desc.indexOf('Hi') > -1) { //Hi는 0이라 if에서 0은 false라 안됨 그래서 -1로 조건식을 써줘야함
    console.log('Hi가 포함된 문장입니다.');
}

ex
function Cola(str) {
    if (str.indexOf("콜라") > -1) {
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

Cola("역시 사이다 체고");
Cola("무슨소리, 콜라가 최고지!");
Cola("콜라");

ex - includes
function Cola(str) {
    if (str.includes("콜라")) {
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
} 

Cola("역시 사이다 체고");
Cola("무슨소리, 콜라가 최고지!");
Cola("콜라");

// slice(n,m) n - 시작점, m - 없으면 끝까지, 이 숫자까지, 음수면 끝에서부터 셈
// substring(n,m) n과 m을 바꿔도 동작하고 음수는 0으로 인식
// substr(n,m) n부터 시작해서 m개를 가져옴

// ` - ${} 표현가능, 여러 줄 표현 가능
// "", '' - 둘 다 상관없음

// 배열이랑 다르게 문자열에선 특정위치 값 변경 불가능

// 숫자제외 글자만 뽑기
let List = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let i =0; i<List.length; i++){
    newList.push(
        List[i].slice(3)
    );

}

console.log(newList);