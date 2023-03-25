"use strict";
const num1elem = document.getElementById('num1');
const num2elem = document.getElementById('num2');
const buttonElem = document.querySelector('button');
function addo(num1, num2) {
    return num1 + num2;
}
// console.log(add(1,2));
// console.log(add('1','2'));
buttonElem.addEventListener('click', () => {
    const num1 = num1elem.value; //.value alaways return string
    const num2 = num2elem.value;
    const res = addo(+num1, +num2); //to conver from string value to int val we need to put '+' sign.
    console.log(res);
});
