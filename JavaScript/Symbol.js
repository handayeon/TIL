// symbol 사용
// 다른 개발자가 만든 객체
const user = {
    name : "Mike",
    age : 30,
};

//내가 작업한 객체
const showName = Symbol ("show name");
user[showName] = function () {
    console.log(this.name);
};

user[showName]();

//사용자가 접속하면 보는  메세지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`);
}
