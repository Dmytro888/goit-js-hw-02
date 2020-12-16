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