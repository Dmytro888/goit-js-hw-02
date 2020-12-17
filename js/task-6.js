const total = function () {
  let arr = [];
  let total = 0;
  let userInput;

  while ((userInput = prompt('введи число')) !== null) {
    userInput = Number(userInput);

    if (Number.isNaN(userInput)) {
      alert('введено не число');
      continue;
    }
    arr.push(userInput);
  }

  for (let i = 0; i < arr.length; i += 1) {
    total = total + arr[i];
  }
  return total;
};

console.log(total());
