//arguments - 함수로 넘어 온 모든 인수에 접근가능, 함수내에서 이용가능한 지역변수, array 형태의 객체

// function showName(name) {
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }

// showName('Mike', 'Tom');

//Rest parameters - 정해지지않은 갯수의 인수를 배열로 나타날 수 있도록, 배열의 메소드들을 사용할 수 있음

// function showName(...names) {
//     console.log(names);
// }

// showName();
// showName('Mike');
// showName('Mike', 'Tom');

//ex

// function add(...numbers) {
//     let result = 0;
//     numbers.forEach((num) => (result += num));
//     console.log(result);
// }

// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function User(name, age, ...skills) {
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
// }

// const user1 = new User("Mike", 20, "html", "css");
// const user2 = new User("Tom", 24, "JS", "react");
// const user3 = new User("Jane", 27, "english");

// console.log(user1);
// console.log(user2);
// console.log(user3);

//전개구문(Spread syntax)

//배열
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let result = [0, ...arr1, ...arr2, 7, 8, 9];

// console.log(result);

//객체
// let user = {name : 'Mike'}
// let a = {...user, age : 30}

// console.log(a)

//복제
// let arr1 = [1, 2, 3];
// let arr2 = [...arr];

// let user = {name:'Mike', age: 30};
// let user2 = {...user};

// user2.age = 14;

// console.log(user.age);
// console.log(user2.age);

//ex
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// // arr2.reverse().forEach((num) => { //reverse를 넣지않으면 arr2를 arr1 앞으로 넣어줘서 거꾸로 들어감
// //     arr1.unshift(num);
// // });

// arr1 = [...arr2, ...arr1]; //위랑 값은 같지만 더 간단히 가능

// console.log(arr1);

let user = {name : "Mike"};
let info = {age : 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// user = Object.assign({}, user, info, { //객체 만들기
//     skills : [],
// });

// fe.forEach((item) => {
//     user.skills.push(item); // 값 넣어주기
// });
// lang.forEach((item) => {
//     user.skills.push(item); // 값 넣어주기
// });

user = {
    ...user,
    ...info,
    skills : [...fe, ...lang],
}; // 위랑 같지만 더 간단하게 가능

console.log(user);