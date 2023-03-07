// Выводит высплывающее сообщение в браузере
// alert("Hello, World!");

// Выводит сообщение в среде Node.js
// console.log('Hello, World!');


// Практика #1

// запрос роста
let height = parseFloat(prompt("Укажите свой рост:"));

// запрос веса
let weight = parseFloat(prompt("Укажите свой вес:"));

// вычисление разницы между ростом и весом
let diff = height - weight;

// проверка полученного значения
if (diff > 110) {
    alert("Вам нужно набрать вес!");

} else if (diff < 90) {
    alert("Вам нужно похудеть!");

} else {
    alert("Ваше вес в норме.");
}