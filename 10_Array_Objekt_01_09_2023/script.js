console.log("===== Regular function =====");
console.log(multiply(3, 4));
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
console.log("===== Arrow function =====");
// console.log(multiplyArrow(6, 5));
// невозможно использовать до объявления, стрелочная функция
const multiplyArrow = (a, b) => {
    return a * b;
};
console.log(multiplyArrow(6, 5));
console.log("===== Object =====");
const obj = {
    userName: "John",
    sayHello: function () {
        console.log(this);
        console.log(`Hello ${this.userName}`);
    },
};
obj.sayHello();
const objArrow = {
    userName: "John",
    sayHello: () => {
        console.log(this);
        console.log(`Hello ${this.userName}`);
    },
};
objArrow.sayHello();
console.log("===== Object 2 =====");
const person = {
    firstName: "Bill",
    lastName: "Brown",
    age: 34,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};
// arr - массив ключей объекта, массив строк
let arr = Object.keys(person);
console.log(arr);
//arr - массив значений объекта
arr = Object.values(person);
console.log(arr);
console.log('arr - массив с массивами пар ключ-значение')
arr = Object.entries(person);
console.log(arr);
console.log(arr[2][1]);

arr = ["one", "two", "three", "eight", "three", "six", "one"];

console.log("===== indexOf =====");
let res = arr.indexOf("three", 3); //возвращает значения, исходній массив не меняет
console.log(arr);
console.log(res);

console.log("===== inxludes =====");
res = arr.includes("three", 3); //возвращает есть или нет значения, исходній массив не меняет
console.log(arr);
console.log(res);

console.log("===== findIndex =====");
res = arr.findIndex(
    (elem, index) => index > 2 && elem.toLowerCase() === "three"
); //
console.log(arr);
console.log(res);

res = arr.findIndex(predicateLength3);

function predicateLength3(e, i) {
    return i > 4 && e.length === 3;
}
console.log(arr);
console.log(res);

arr.find((elem, index) => index >3 && elem === 3);
console.log(arr);
console.log(res);

