// функция для сложения
function add(a, b) {
   return a + b;
 }
 
 // функция для вычитания
 function subtract(a, b) {
   return a - b;
 }
 
 // функция для умножения
 function multiply(a, b) {
   return a * b;
 }
 
 // функция для деления
 function divide(a, b) {
   if (b === 0) {
     return "На ноль делить нельзя!"; // обработка ошибки деления на 0
   }
   return a / b;
 }
 
 // пример использования
 let result = divide(10, 2); // результат будет 5
 console.log(result);