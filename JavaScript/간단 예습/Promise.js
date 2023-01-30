// resolve - 성공, reject - 실패
// const pr = new Promise((resolve, reject) => {
//     setTimeout(()  => {
//         // resolve("OK");  //성공
//         reject(new Error("err...."));
//     }, 1000);
// });

// console.log("시작");
// pr.then((result) => {
//     console.log(result);
// })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {        //성공이든 실패든 항상 마지막에 실행 됨
//         console.log("끝");
//     })


// promise X
// const f1 = (callback) => {
//     setTimeout(function () {
//         console.log("1번 주문 완료");
//         callback();
//     }, 1000);
// };

// const f2 = (callback) => {
//     setTimeout(function () {
//         console.log("2번 주문 완료");
//         callback();
//     }, 3000);
// };

// const f3 = (callback) => {
//     setTimeout(function () {
//         console.log("3번 주문 완료");
//         callback();
//     }, 2000);
// };

// console.log('시작')
// f1(function() {                 //댑스가 깊어지면서 callback을 호출하는 것을 callback hell 라고함
//     f2(function() {
//         f3(function() {
//             console.log("끝");
//         });
//     });
// });

// promise O
const f1 = () => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            //rej("xxx"); //f3은 실행도 안함
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res,rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

//promise.all = 한꺼번에 시작, 하나라도 err일 경우 값이 안뜸
// console.time("x");
// Promise.all([f1(), f2(), f3()]).then((res) => {
//     console.log(res);
//     console.timeEnd("x");
// });

//promise.race = all이랑 다르게 하라라도 완료 되면 끝남
console.time("x");
Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});

//promise chaining
// console.log('시작');
// f1()
// .then(res => f2(res))
// .then(res => f3(res))
// .then(res => console.log(res))
// .catch(console.log)
// .finally(() => {
//     console.log('끝');
// });