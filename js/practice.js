// 1 =====================последовательность Фибаначии рекурсивной функцией======================= 1

// let first = 0;
// let second = 1;
// let total;

// for (let i = 0; i < 11; i += 1) {
//     total = first + second
//     first = second
//     second = total
//     console.log(total)
// }

// const febanachi = function (amount, responseArr = [0, 1) {

// } responseArr.push(responseArr[responseArr.length - 2] + responseArr[responseArr.length - 1])

// if (responseArr.length < amount) {
//     return febanachi(amount, responseArr);
// } else {
//     return responseArr;
// }

// }

// console.log(febanachi(10));

// 2 ============ функция проверяет на палiндром ================== 2

// const isPolindrom = function (stri) {

//        return stri === stri.split('').reverse().join('');
// }

// console.log(isPolindrom('101'));

// 3 ==============================разделение массиовов по типу======================================= 3

// let arr = [1, 2, 'dsfsd', 3, 4, 5, 'dfvtr', 'gfbda', 5.5, 4.8, 9, 1.5, 7.6, 8, 9, 'sdsdc', 'scdsc'];

// const addToArray = function (arr) {
//     let responseArr = [];
//     responseArr['int'] = [];
//     responseArr['float'] = [];
//     responseArr['string'] = [];

//     for (let item of arr) {
//         if (Number.isInteger(item)) {
//             responseArr['int'].push(item);

//         }

//         else if (item % 1 !== 0 && typeof item === 'number') {
//             responseArr['float'].push(item);

//         }

//         else if (typeof item === 'string') {
//             responseArr['string'].push(item);

//         }
//     }
//     return responseArr;
// }

// console.log(addToArray(arr));

// ====================================================================================================

// const sum = function (arr) {
//    let total = 0;
//     for (let i = 0; i < arr.length; i += 1) {
//         total = total + arr[i]
//     }

//     console.log(total);

// };

// sum([1, 2, 3, 5,45, 5454,545454])

// =============================================================================================================

// обмен валют
// функция на обмен и на покупку

// const usdBuy = 28.5;
// const usdSell = 27.5;

// const euroBuy = 32.5;
// const euroSell = 31.5;

// const rubBuy = 0.5;
// const rubSell = 0.3;

// const exBye = (amount, currensy) => amount / currensy;

// const exSale = (amount, currensy) => amount * currensy;

// console.log(exBye(2900, usdBuy));
// console.log(exSale(200, euroSell));
// console.log(exBye(2000, rubBuy));

// =========================================================================

// создать массив с рандомными (интовыми) значениями и посчитать среднее значение)

// const randomArr = (amount, min, max) => {
//   let arr = [];
//   let sum = 0;
//   for (let i = 0; i < amount; i += 1) {
//     arr.push(Math.round(Math.random() * (max - min) + min));
//   }
//   for (let item of arr) {
//     sum += item;
//   }
//   return sum / amount;
// };

// console.log(randomArr(10, 1, 10));

// =======================================================================

// написать ф - цию которая генерит строку и потом посчитать сколько получилось стрелочек

// const stringFn = amount => {
//   let str = '';
//   let randomNumber = 0;
//   for (let i = 0; i < amount; i += 1) {
//     randomNumber = parseInt(Math.random() * (4 - 1) + 1);
//     if (randomNumber === 1) {
//       str += '<';
//     }
//     if (randomNumber === 2) {
//       str += '>';
//     } else {
//       str += '-';
//     }
//   }
//   return str;
// };

// let randomString = stringFn(250);

// const arrowsAmount = str => {
//   const arrowArr = ['<-', '->'];
//   for (let item of arrowArr) {
//     let tempString = str;
//     let indexOfString = str.indexOf(item);
//     while (str.indexOfString > -1 && );
//     {
//       counter++;
//       tempString = tempString.subStr(indexOfString + 2);
//       indexOfString = tempString.indexOf(item);
//     }
//   }
// };

// console.log(randomString);
// console.log(arrowsAmount(randomString));
