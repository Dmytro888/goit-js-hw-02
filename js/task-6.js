const total = function () {
    let arr = []
    let total = 0;
    
    while (true) {
        let userInput = prompt('введи число')
        if (userInput === null) {
            break;
        }
        userInput = Number(userInput);
        arr.push(userInput);
        
        const notANumber = Number.isNaN(userInput)
        if (notANumber) {
        arr.pop(userInput)
        alert('введено не число')
        continue;
    }
    }

     for (let i = 0; i < arr.length; i += 1) {
     total = total + arr[i]
    }
    return total
}

console.log(total());


