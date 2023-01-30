//생성자 함수 : 객체 생성
function Item(title, price) {
    
    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`가격은 ${price}원 입니다.`);
    };
}

const item1 = new Item("노트북", 30000);
const item2 = new Item("마우스", 5000);
const item3 = new Item("키보드", 25000);

console.log(item1, item2, item3);

item3.showPrice();