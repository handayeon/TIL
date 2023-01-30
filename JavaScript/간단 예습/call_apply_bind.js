//call - 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있음
// const mike = {
//     name:"Mike",
// };

// const tom = {
//     name:"Tom",
// };

// function showThisName() {
//     console.log(this.name);
// }

// showThisName.call(mike);
// showThisName.call(tom);

// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// update.call(mike, 20000, "programmer");
// console.log(mike);
// console.log(tom);

//apply - 함수 매개변수 처리하는 방법을 제외하면 call과 완전히 같음, call은 일번적인 함수와 마찬가지로 매개변수를 직접 받지만 apply는 매개변수를 배열로 받음

// console.log(mike);
// update.apply(tom, [20000, "programmer"]);
// console.log(tom);

const nums = [3, 10, 1, 6, 4]; 
// const minNum = Math.min(nums); //NaN
// const maxNum = Math.max(nums); //NaN

// const minNum = Math.min(...nums); //
// const maxNum = Math.max(...nums); //

const minNum = Math.min.apply(this, nums); // apply는 배열로 받음 
// = Math.min.apply(this, [3, 10, 1, 6, 4])
const maxNum = Math.max.call(this, ...nums);
// = Math.max.call(this, 3, 10, 1, 6, 4)
console.log(minNum);
console.log(maxNum);  

//bind - 함수의 this 값을 영구히 바꿀 수 있다.

// const mike = {
//     name : "Mike",
// };

// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// const updateMike = update.bind(mike);

// updateMike(1980, "police");
// console.log(mike);

//ex

const user = {
    name : "Mike",
    showName : function() {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

let fn = user.showName;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();