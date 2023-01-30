// //객체 메소드
// let n = "name";
// let a = "age";

// const user = {
//     [n] : "Mike",
//     [a] : 30,
// };

// console.log(user);

// //어떤 값이 키값일지 모를 때 쓰면 유용한
// function makeObj (key, val) {
//     return {
//         [key] : val,
//     };
// }

// const obj = makeObj("나이", 33);
// console.log(obj);

// //복제

// //X - 복제된 것처럼 보이지만 하나의 객체를 보고 있기 때문에 수정시 같이 수정

// const user = {
//     name : "Mike",
//     age : 30,
// };

// const user2 = user;
// user2.name = "Tom";

// console.log(user);
// console.log(user2);

// o
// const user2 = Object.assign({}, user); 
// user2.name = "Tom"

// console.log(user);
// console.log(user2); 

// //값 배열로 반환
// const user = {
//     name : "Mike",
//     age : 30,
// };

// const result = Object.keys(user); // keys - 키값 반환, values - 밸류값 반환, entries - 둘 다 변환

// console.log(result); 

// //배열을 fromEntries를 통해서 객체로

// let arr = [
//     ["mon", "월"],
//     ["tue", "화"],
// ];

// const result = Object.fromEntries(arr);

// console.log(result);
