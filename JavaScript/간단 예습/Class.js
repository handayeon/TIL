// const User1 = function(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.showName = function() {
//     //     console.log(this.name);
//     // };
// };

// User1.prototype.showName = function() { //이렇게 하면 밑에 class처럼 prototype에 저장됨
//     console.log(this.name);
// }; 

// const mike = new User1("Mike", 23); // new가 없으면 undefined

// class User2 {               // new를 통해 호출했을 때 내부에 정의된 내용으로 객체를 생성하는 것은 동일
//     constructor(name, age){ // constructor는 객체를 만들어주는 생성자 메소드
//         this.name = name;
//         this.age = age;
//     }
//     showName() {            // class 내에 정의한 메소드는 prototype에 저장됨
//         console.log(this.name);
//     }
// }

// const tom = new User2("Tom", 19); // new가 없으면 에러


//class 상속 - extends
//메소드 오버라이딩 - method overriding

// class Car {
//     constructor(color) {
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive() {
//         console.log("dirive..");
//     }
//     stop() {
//         console.log("STOP!");
//     }
// }

// class Bmw extends Car {
//     park() {
//         console.log("PARK");
//     }
//     stop() {
//         super.stop(); // 부모메소드 사용시 = 메소드 오버라이딩
//         console.log("OFF");
//     }
// }

// const z4 = new Bmw("Blue");

// 오버라이딩 - overriding, constructor 생성자 오버라이딩
class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("dirive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {     // extends를 써서 만든 자식 class는 빈 객체가 만들어지고 this에 할당하는 이 작업을 건너뜀
    constructor(color) {         // this 호출 전에 부모생성자를 반드시 호출
        super(color);            // 그래서 항상 이렇게 호출, 부모가 자식에게 동일한 인수를 받는 작업을 해야함(color)
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
}

// const z4 = new Bmw("Blue");