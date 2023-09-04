console.log("Hello word!");
//undefined создан но значение не присвоено, не инициализировано
let x;
console.log(x);

x = 7;
x = "bye";
console.log(x);

const pi = 3.1415926;
//pi=3.14 пример ошибки

let y = x;
console.log(y);

const exp = pi;
console.log(`exp = ${exp} or ${pi}`);

x = true;
console.log(x);

x = null;
console.log(x);

let res = 7 % 2;
console.log(`res=${res}`);

let res1 = "true" + 5;
console.log(res1);

res = true + 5;
console.log(res);

x = "2" == 2;
console.log(`x=${x}`);

res = 5 + "";
console.log(typeof res);

res = Number("5");
console.log(typeof res);

res = +"5";
console.log(typeof res);
res = +"5";

res = +"5,,,,,,,,,";
console.log(res);

switch (res) {
    case 5:
        console.log(`number:${res}`);
        break;
    case "5":
        console.log(`string:${res}`);
        break;
    default:
        console.log("It's not a 5");
}
let age = 16;
let vol = age > 16 ? 42 : 1.5;
console.log(`string:${vol}`);

/*if (age > 16) {
    return 42;
} else {
    return 1.5;
}*/
console.log(+pi.toFixed(2));
console.log(typeof pi.toFixed(2));
console.log(typeof +pi.toFixed(2));

x = 10;
res = x++ + ++x;
console.log(res);

x = 10;
y = 5;

res = add(x, y);
console.log(`res=${res}`);

function add(a, b) {
    return a * b;
}

x = !!x; // такая конструкция неявное приведение переменной к булевскому значению
console.log(x);

let example = "hello";
console.log(!!example);
//false = 0, -0, null, NaN, undefined, '', false

/*let userName = null;
let nickName = userName || "Anonymous";
greeting();
greeting("Halina");
*function greeting(nickName1 = "Anonymous") {
    console.log("Hello ${nickName1}");
}

res=sumDigits(1234);
console.log*/

res = ("b" + "a" + +"a" + "a").toLocaleUpperCase();//все большими буквами toLocaleUpperCase()
console.log(res);

let number = 12346;

function sumDigits(n) {
    return String(n)
        .split("")
        .map(Number)
        .reduce(a + b, 0);
}
//Метод reduce() приводит массив к единому значению,
//то есть редуцируя (сокращая, сводя) его. Он относится к группе методов,
//используемых для переборки значений массива, дополняя такие методы как forEach, filter, map и every/some.

let result = sumDigits(number);
console.log(result);

let n = 12346;
function sumDigits(n) {
    let sum = 0;
    let str = String(n);
    for (let i = 0; i < str.length; i++) {
        sum = sum + parseInt(str[i]);
    }
    return sum;
}
let resultS = sumDigits(n);
console.log("n =" + resultS);

x = 123006;
function luckyNumber(x) {
    let sum1 = 0;
    let sum2 = 0;
    let str = String(x);
    if (str.length % 2 !== 0) {
        console.log("False");
        return false;
    }
    for (let i = 0; i < str.length / 2; i++) {
        sum1 = sum1 + parseInt(str[i]);
    }

    for (i = str.length / 2; i < str.length; i++) {
        sum2 = sum2 + parseInt(str[i]);
    }
    return sum1 === sum2;
}
luckyNumber(x) ? console.log("Lucky") : console.log("Un Lucky");

n = 15346;
function sumDigits(n) {
    let sum = 0;
    while (n) {
        sum += n % 10;
        n = (n - (n % 10)) / 10;
    }
    return sum;
}
let resultSS = sumDigits(n);
console.log("nn =" + resultSS);

x = 126306;
function luckyNumber(x) {
    
    let str = String(x);
    if (str.length % 2 !== 0) {
        console.log("False");
        return false;
    }
    let secondHalf=x%1000
    let firstHalf=(x-secondHalf)/1000
   
    return sumDigits(secondHalf) === sumDigits(firstHalf);//используем функцию которую посчитала віше function sumDigits(n)
}
luckyNumber(x) ? console.log("Lucky") : console.log("Un Lucky");


let d=123456
function sp(d) {
    return String(d)
        .split("")
        .map(Number);
}
resultS = sp(d);
console.log( "d = " + "[" + resultS + "]");


