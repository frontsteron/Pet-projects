# Алгоритмы
## Это определенная(*математическая*) инструкция, последовательно применяя которую, можно получить решение задачи. От ТЗ к нужному результату, например.

## Критерии выбора:
- ### Скорость(*для минимума времени*),
- ### Объем потребляемой памяти.

## Какая бывает сложность алгоритмов:
- ### **O(1)** - константная. Не зависит от объема данных. Например - поиск по хэш-таблице,
- ### **O(log n)** - логарифмическая. Увеличение размера почти не сказывается на количестве итераций. Например - бинарный поиск, поиск по сбалансированному дереву - *very good*,
- ### **O(n)** - линейная. Увеличение сложности эквивалентно увеличению размера. Например - поиск по неотсортированному массиву - *good*,
- ### **O(n * log n)** - увеличение размера заметно сказывается на сложности. Например - быстрая сортировка - *not slow*,
- ### **O(n^2)** - квадратичная. Увеличение размера очень сильно сказывается на сложности. Например -пузырьковая сортировка - *slow*,
- ### **O(2^n)** - экспоненциальная. С увеличением размера на 1, сложность возрастает вдвое - *very slow*.

## **Структура даннных** - контейнер в котором хранятся данные.
### Одна из таких структур это **массив** - а он является контейнером/хранилищем данных одного типа. У этих данных есть индексы(*порядковый номер*), эти массивы могут расширятся(*динамические*), а могут не расширятся(*статические*). Они всегда знают где у них находится элеменит под определенным индексом. Существует поиск и сортировка данных по массиву.

## **Алгоритмы сортировки**
* ### **Пузырьковая сортировка** - попарно сравниваем все элементы и если один больше другого, то совершаем обмен местами.

```JavaScript
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Пример использования:
let arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // [ 2, 3, 4, 5, 8 ]
```
* ### **Сортировка выбором** - сравниваем все элементы с первым, запоминаем и самый минимальный/максиальный меняем с первым местами.

```JavaScript
function selectionSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let minPosititon = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minPosititon]) {
        minPosititon = j;
      }
    }
    if(minPosititon !== i) {
      [arr[minPosititon], arr[i]] = [arr[i], arr[minPosititon]];
    }
  }
  return arr; // Только после анализа всех данных, совершаем обмен
}

// Пример использования
const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // [11, 12, 22, 25, 64]
```
* ### **Сортировка вставками** - первый объект под индексом сравниваем со всеми объектами, когда объект меньше/больше, то меняем с первым элементом и начинаем опять сравнивать число под изначальным индексом.

```JavaScript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let temp = arr[i]
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr // Обмены присходят руглярно, но не как в пузырьковой сортировке
}

// Пример использования
let array = [6, 5, 3, 1, 8, 7, 2, 4]
console.log(insertionSort(array)) // [1, 2, 3, 4, 5, 6, 7, 8]
```
## **Алгоритмы поиска** - логарифмическая сложность.
* ### **Простой поиск** - классический перебор, O(n).
```JavaScript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }
  return -1; // если элемент не найден
}

let myArray = [1, 5, 8, 10, 12];
let targetNum = 10;
console.log(linearSearch(myArray, targetNum)); // выводит 3

```
* ### **Бинарный поиск** - отсортированный массив делим всегда пополам(*разделяй и влавствуй*), O(log n), очень низкая сложность.
```JavaScript
function binarySearch(arr, x) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let midpoint = Math.floor((min + max) / 2);

    if (arr[midpoint] === x) {
      return midpoint;
    } else if (arr[midpoint] < x) {
      min = midpoint + 1;
    } else {
      max = midpoint - 1;
    }
  }
  return -1;
}

// Пример использования
let arr = [2, 3, 4, 10, 40];
let x = 10;
let result = binarySearch(arr, x);

console.log(result); // 3, но не всегда можно быстро отсортировать массив
```
## **Продвинутые алогритмы сортировки**
* ### **Быстрая сортировка** - даелим массив пополам*(на пивот(не центральный))*, и ложим влево все, что меньше пивота, а вправо все, что больше(*разделяй и влавствуй*). И так до концв.
```JavaScript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
      continue; // пропускаем опорный элемент
    }

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Пример использования
const myArr = [3, 1, 4, 2, 7, 6];
const sortedArr = quickSort(myArr);
console.log(sortedArr); // [1, 2, 3, 4, 6, 7]

```
* ### **Пирамидальная сортировка** - в этом примере **heapSort** - это функция, которая принимает массив для сортировки. Внутри функции определяется вспомогательная функция **heapify**, которая выполняет пирамидальное упорядочивание элементов.
```JavaScript
function heapSort(array) {
  function heapify(parent, max) {
    let temp = array[parent],
        child = 2 * parent + 1;
    while (child <= max) {
      if (child < max && array[child] < array[child + 1]) {
        child++;
      }
      if (temp >= array[child]) {
        break;
      }
      array[parent] = array[child];
      parent = child;
      child = 2 * parent + 1;
    }
    array[parent] = temp;
  }

  let n = array.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(i, n - 1);
  }
  for (let i = n - 1; i > 0; i--) {
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapify(0, i - 1);
  }
  return array;
}

let array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // [1, 3, 4, 5, 10]

```