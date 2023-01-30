//ex


// const car = { // bmw, benz, audi 객체에서 공통된 부분으로 객체를 만듦
//     wheels : 4,
//     drive() {
//         console.log("drive..");
//     },
// };

// const bmw = {
//     color : "red",
//     navigation : 1,
// };

// const benz = {
//     color : "black",
// };

// const audi = {
//     color : "blue",
// };

// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;  // car가 audi의 proto타입이 되는 것 = audi는 car의 상속을 받음

// const x5 = {
//     color : "white",
//     name : "x5",
// };

// x5.__proto__ = bmw;




// const car = {
//     wheels : 4,
//     drive() {
//         console.log("drive..");
//     },
// };

// const Bmw = function(color){
//     this.color = color;
// };

// Bmw.prototype.wheels = 4;           //위 아래 주석문을 간단히 쓴
// Bmw.prototype.drive = function() {
//     console.log("drive..");
// };

// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function() {
//     console.log("STOP!");
// };

// const x5 = new Bmw("red");
// const z4 = new Bmw("blue");

// Bmw.prototype = {
//     constructor : Bmw, //  이렇게 쓰려면 직접 constructor을 지정해줘야함, js는 명확한 constructor는 보장하진 않음 개발자에 의해 언제든 변경 가능
//     wheels : 4,
//     drive() {
//         console.log("drive..");
//     },
//     navigation : 1,
//     stop() {
//         console.log("STOP!");
//     },
// };

// x5.__proto__ = car;
// z4.__proto__ = car;


const Bmw = function(color) {
    const c = color;
    this.getcolor = function() {  // closure을 이용하면 값을 바꿀 수 없음
        console.log(c);
    };
};

const x5 = new Bmw("red");