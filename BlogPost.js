const form = document.querySelector('form');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

form.addEventListener('submit', calculate);

function calculate(e){
    e.preventDefault();
    alert(`The answer of ${num1.value} + ${num2.value} = ${Number(num1.value) + +Number(num2.value)}`);
}
