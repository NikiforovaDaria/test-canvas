
function number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

number1 = number (6, 9);    
summa = number (11, 14);
number2 = summa - number1;

console.log(number1);
console.log(number2);
console.log(summa);


//переношу числа в html

num1 = document.getElementById('num1');
num1.innerHTML = number1;

num2 = document.getElementById('num2');
num2.innerHTML = number2;

////////
// var canvas = document.querySelector('#canvas');
// context = canvas.getContext('2d');
// context.strokeStyle = 'purple';
// context.wight = 50;
// context.height = 50;
