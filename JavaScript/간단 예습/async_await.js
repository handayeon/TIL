// async - 항상 promise를 반환 => 함수 호출 후 then 사용가능
// async function getName() {
//     //return "Mike";
//     //return Promise.resolve("Tom"); // 값을 그대로 사용
//     throw new Error("err.."); // catch로 확인가능
// }

// // getName().then((name) => {
// //     console.log(name);
// // });

// getName().catch((err) => {
//     console.log(err);
// });

// await - async 함수 내부에서만 사용 가능

// function getName(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(name);
//         }, 1000);
//     });
// }

// async function showName() {
//     const result = await getName("Mike");
//     console.log(result);
// }

// console.log("시작");
// showName();


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
            //res("2번 주문 완료");
            rej("xxx"); //f3은 실행도 안함 async에선 try catch로 감싸줌
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

console.log("시작"); // promise then 보다 가독성이 좋음
async function order() {
//     const result1 = await f1();
//     const result2 = await f2(result1);
//     const result3 = await f3(result2);
//     console.log(result3);
//     console.log("종료");
    try{
        // const result1 = await f1();
        // const result2 = await f2(result1);
        // const result3 = await f3(result2);
        // console.log(result3);
        const result = await Promise.all([f1(), f2(), f3()]); // promise.all 사용 res만 가능
        console.log(result);
    } catch(e) {
        console.log(e);
    }
    console.log("종료");
}
order();