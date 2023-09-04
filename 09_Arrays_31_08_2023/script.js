const arr = [1, 2, 3, "four", "five"];

console.log(typeof arr); //typeof ключевое слово узнать состав єлемента
console.log(arr.length);

console.log(
    "===================push====добавляет в конец массива елементі изменяя исходній массив возвращает новую длину массива============="
);
let res = arr.push(6, 7, 18);
console.log("arr [" + arr + "]");
console.log(res);
//console.log("arr [" + arr + "]"); -возвращается новій массив
//console.log(res)- новая длинна массива
console.log(arr.length);

console.log(
    "=================pop====удаляет последний елемент изменяя исходній массив и возвращает удаленній елемент======="
);
res = arr.pop();
console.log(res);
console.log("arr [" + arr + "]");

console.log(
    "=================shift====удаляет первій елемент изменяя исходній массив и возвращает удаленній елемент======="
);
res = arr.shift();
console.log(res);
console.log("arr [" + arr + "]");

console.log(
    "=================unshift====добавляет в начало массива изменяя исходній массив и возвращает новую длинну======="
);
res = arr.unshift(0, 22);
console.log(res);
console.log("arr [" + arr + "]");

console.log(
    "=================concat====соеденение массивов//конкотинация не меняет исходники возвращает новій массив======="
);
let arr1 = [1, 2, 3];
let arr2 = [11, 22, 33];
console.log(arr1.concat(arr2));
console.log("arr [" + arr1 + "]");
console.log("arr [" + arr2 + "]");

console.log(
    "=================slice====не меняет исходник, возвращает новій массив вібранного диапазона без учета левого края======="
);
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("arr 3 [" + arr3 + "]");
console.log(arr3.slice(2, 5));
console.log(arr3.slice(2));
console.log(arr3.slice(0, arr.length - 1));
console.log(arr3);

console.log(
    "=================splice====меняет исходник, вірезая єлементі от индекса старта в указанном колличестве возвращает новій массив вібранного диапазона без учета левого края======="
);
arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("arr 3 [" + arr3 + "]");
console.log(arr3.splice(2, 2));
console.log(arr3);

console.log("=================spread===========");
const uniteArr = [...arr1, ...arr2];
console.log(uniteArr);
console.log(arr1);
console.log(arr2);

let obj = {
    userName: "Jone",
    age: 14,
};
let obj1 = {
    userName: "Oone",
    age: 15,
};
let objCopy1 = { ...obj, ...obj1 };
console.log(obj);
console.log(obj1);
console.log(objCopy1);

let obj2 = {
    userName: "Bone",
    age: 15,
    nationality: "Poland",
    dateOfBirsDay: "14.02.2023",
};

let objCopy = { ...obj2, age: 20 };
console.log(objCopy);
console.log(obj2);
