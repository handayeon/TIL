// setTimeout - 일정 시간이 지난 후 함수를 실행, setInterval - 일정 시간 간격으로 함수를 반복

// function fn() {
//     console.log(3)
// }
// setTimeout(fn, 3000);

// function showName(name) {
//     console.log(name);
// }

// const tId = setTimeout(showName, 3000, 'Mike');

// clearTimeout(tId);

// function showName(name) {
//     console.log(name);
// }

// const tId = setInterval(showName, 3000, 'Mike');

// clearInterval(tId);

// setTimeout(function() {
//     console.log(2)
// }, 0); // 0이라고 바로 되지 않고 밑에 '1'부터 실행

// console.log(1);

//ex
let num = 0;

function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5) {
        clearInterval(tId);
    }
}

const tId = setInterval(showTime, 1000);