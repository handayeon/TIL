//10 -> 2진수/16친수
let num = 10;

num.toString();
num.toString(2);
num.toString(16);

//Math
Math.PI;

// ceil() - 올림, floor() - 내림, round() - 반올림
let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1);
Math.ceil(num2);

//소수점 자릿수 : toFixed 소수점 자릿수보다 작은 0이면 소수점이 없어지고, 소수점 자릿수보다 많으면 0으로 채워줌
//*넘버로 변환하여 사용해야함
let userRate = 30.1234;

//소수점 둘째자리까지 표현(셋째자리까지 반올림)
Math.round(userRate * 100) / 100; 
Number(userRate.toFixed(2));

//parseInt()
let margin = '10px';
parseInt(margin); //읽을 수 있는 부분까진 읽음
Number(margin); //NaN 뜸

let redColor = 'f3';
parseInt(redColor); //NaN 뜸
parseInt(redColor, 16); //16진수로 변환하여 숫자로 변환

parseInt('11', 2); //문자 11을 숫자 2진수로 변환

//parseFloat() 은 Int랑 같이 변환되지만 소수점까지 변환할 수 있음

//Math.random
Math.floor(Math.random() * 100) + 1 // 1부터 100까지 임의의 숫자를 뽑을 땐 최대값인 100을 곱하고 최소값인 1을 더해줘서 0이 나오지 않도록
