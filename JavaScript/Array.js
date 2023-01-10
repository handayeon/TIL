//array

//splice n - 시작부분, m - 개수, 배열 제거 혹은 변경 혹은 추가(m = 0)
//slice - n부터 m까지 m은 반환 x 앞까지 반환 o

//forEach - 배열 반복

// let arr = ['Mike', 'Tom', 'Jane'];

// arr.forEach((name, index) => {
//     console.log(`${index + 1}. ${name}`);
// });

//find / findIndex - 조건에 맞는 첫 값만 출력, filter - 조건에 맞는 모든 값 출력

// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Jane", age: 27},
//     {name: "Tom", age: 10},
// ];

// const result = userList.find((user) => {
//     if(user.age < 19) {
//         return true;
//     }
//     return false;
// });

// console.log(result);

//map??

//join - 배열을 합쳐서 문자열 만들기

// let arr = ["안녕", "반가워"];

// let result = arr.join(" ");

// console.log(result);

// let user1 = {
//     name: "Mike",
//     age : 19,
// };

// let user2 = ["Mike", 19];

// console.log(typeof user1);
// console.log(typeof user2);

// console.log(Array.isArray(user1));
// console.log(Array.isArray(user2));

//sort - 정렬할 때 문자로 취급하게 됨
// let arr = [27, 8, 5, 13];

// arr.sort((a, b) => { 
//     console.log(a, b);
//     return a - b;
// });

// console.log(arr);

//reduce - 인수로 함수 받음, prev - 누적 계산값, cur - 현재값
//배열의 모든 수 합치기

// let arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((prev, cur) => {
//     return prev + cur;
// }); //0은 안써도 됨 그러면 배열 첫번째가 들어감

// console.log(result);

//ex

// let userList = [
//     { name : "Mike", age : 30},
//     { name : "Tom", age : 17},
//     { name : "Jane", age : 27},
//     { name : "Sue", age : 26},
//     { name : "Harry", age : 12},
//     { name : "Steve", age : 20},
// ];

// let result = userList.reduce((prev, cur) => {
//     if(cur.age > 19) {
//         prev.push(cur.name);
//     }
//     return prev;
// }, []);

// console.log(result);


// let results = userList.reduce((prev, cur) => {
//     if (cur.name.length == 3) {
//         prev.push(cur.name);
//     }
//     return prev;
// }, []);

// console.log(results);