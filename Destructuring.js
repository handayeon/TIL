//배열 구조 분해
// let users = ['Mike', 'Tom','Jane'];

// let [user1, user2, user3] = users;

// == let user1 = users[0];
//    let user2 = users[1];
//    let user3 = users[2];

// split 이용
// let str = "Mike-Tom-Jane";

// let [user1, user2, user3] = str.split('-');

// console.log(user1);
// console.log(user2);
// console.log(user3);

//기본값
//let [a, b, c] = [1, 2]; // 값이 없으면 undifined

// let [a=3, b=4, c=5] = [1, 2];

// console.log(a);
// console.log(b);
// console.log(c);

//바꿔치기
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// 객체 분해
// let user = {name : 'Mike', age : 30};

// let {name, age} = user;
// let {name : userName, age : userAge} = user; //새로운 변수 이름으로 할당

// console.log(name);
// console.log(age);
// console.log(userName);
// console.log(userAge);

let user = {name : 'Mike', age : 30};

let {name, age, gender = 'male'} = user;

console.log(gender);