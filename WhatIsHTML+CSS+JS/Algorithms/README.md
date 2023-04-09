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
---
# **Структура даннных** - контейнер в котором хранятся данные.
## **Массив** - одна из таких таких структур, это контейнер/хранилище данных одного типа. 
### У этих данных есть индексы(*порядковый номер*), эти массивы могут расширятся(*динамические*), а могут не расширятся(*статические*). Они всегда знают где у них находится элеменит под определенным индексом. Существует поиск и сортировка данных по массиву.

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
* ### **Пирамидальная сортировка** - в этом примере `heapSort` - это функция, которая принимает массив для сортировки. Внутри функции определяется вспомогательная функция `heapify`, которая выполняет пирамидальное упорядочивание элементов.
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
---
## **Связанный список** - ещё одна из структур данных, этот список не индексирует каждый элемент, а использует принцып связи элементов друг с другом.

### Приемущества:
- ### Массовые вставки и удаления в конец\начало списка,
- ### Массовые вставки и удаления в середину списка, если операция поиска выполняется единожды,
- ### Динамическая расширяемость.

### Они бывают **однонаправленные**(*содержат связи только на **следующтй** элемент списка*) и **двунаправленные**(*содержат связи на **предыдущий** и на **следующий** элемент списка*).

### Однако в **JS** нет стандартной реализации однонаправленного списка, его можно создать путем создания объектов узлов списка и связывания их вручную. Каждый узел списка должен иметь два свойства: `value`(*имеещие данные/значения*) и `next`(*указывающее на следующий узел списка*). 
### Вот пример создания однонаправленного списка в **JS**:
```JavaScript
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // начало списка
    this.tail = null; // конец списка
    this.length = 0; // длина списка
  }

  addToTail(value) { // добавление элемента в конец списка
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  removeFromHead() { // удаление первого элемента списка
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    // если это был последний элемент списка, конец списка становится null
    if (!this.head) this.tail = null;

    return value;
  }

  printList() { // вывод списка в консоль
    let currentNode = this.head;
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(' -> '));
  }
}

// Использование списка
const list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.printList(); // 1 -> 2 -> 3
list.removeFromHead();
list.printList(); // 2 -> 3
```
### Это пример простого класса, реализующего однонаправленный список. Вы можете **добавлять**, **удалять** и **выводить** элементы списка в консоль. <|im_end|
---
### В **JS** двунаправленный связанный список может быть реализован с использованием объектов. Каждый объект будет содержать указатель на предыдущий и следующий элементы списка. Например простой двунаправленный связанный список:
```JavaScript
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // другие методы связанного списка, например, удаление элементов и поиск
}
```
### Класс `DoublyLinkedList` содержит ссылки на начало и конец списка, а также методы для добавления, удаления и поиска элементов в списке. Класс `Node` содержит значение элемента списка и ссылки на предыдущий и следующий элементы. 

### Пример использования:
```JavaScript
const list = new DoublyLinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);

console.log(list.head.value); // 1
console.log(list.tail.value); // 3
console.log(list.head.next.value); // 2
console.log(list.tail.prev.value); // 2
```
### Здесь мы создаем новый связанный список, добавляем в него три элемента и выводим значения первого и последнего элемента, а также значения элементов, следующих и предыдущих за первым и последним элементами.
---
### Вот пример кода, который реализует разворот связанного списка в **JS**:
```JavaScript
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}
```
### Функция `reverseLinkedList` принимает голову связанного списка и переворачивает его, меняя каждое значение next на ссылку на предыдущий узел. В конце концов, функция возвращает новую голову связанного списка, которая была последним узлом в оригинальном связанном списке.
```JavaScript
// Создаем связанный список
const ll = { 
  value: 1,
  next: { 
    value: 2,
    next: { 
      value: 3,
      next: null
    }
  }
};

// Разворачиваем связанный список
const reversed = reverseLinkedList(ll);
console.log(reversed);
```
### Этот код должен вывести в консоль новую голову перевернутого списка, со значением 3:
```JavaScript
{
  value: 3,
  next: {
    value: 2,
    next: {
      value: 1,
      next: null
    }
  }
}
```
## **Стек** - это структура данных, которая работает по принципу **LIFO** (*Last In, First Out*), то есть последний добавленный элемент в стеке будет первым удаленным. 

### Если вам нужно реализовать стек на JavaScript, можно использовать связный список. Связанный список - это структура данных, состоящая из узлов, каждый из которых содержит данные и ссылку на следующий узел.

### Например, вот как можно реализовать стек с помощью связного списка на **JS**:
```JavaScript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    return poppedNode.data;
  }

  peek() {
    if (!this.top) {
      return null;
    }
    return this.top.data;
  }
}
```
### Здесь мы создаем класс `Node` для узла и класс `Stack` для связного списка, который будет представлять стек. Метод `push` добавляет новый элемент на вершину стека, а метод `pop` удаляет и возвращает элемент, находящийся на вершине стека. Метод `peek` возвращает значение элемента на вершине стека без удаления самого элемента.
---
## **Очередь** - это структура данных, которая позволяет добавлять элементы в конец очереди и удалять элементы из начала очереди. 
### Это схоже с принципами действия очереди в реальной жизни - первым пришел, первым ушел(*FIFO*). Вы можете реализовать очередь с помощью массива, используя специальные методы для добавления и удаления элементов, или же написать свою имплементацию. 
### Например, вот пример простой реализации очереди на **JS**:

```JavaScript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if(this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // [10, 20, 30]
queue.dequeue();
queue.print(); // [20, 30]
```
### Этот код создает класс `Queue`, который имеет методы `enqueue()`, `dequeue()`, `isEmpty()`, и `print()`, и массив `items`, который содержит элементы очереди. Метод `enqueue()` добавляет элемент в конец очереди, метод `dequeue()` удаляет элемент из начала очереди и возвращает его, метод `isEmpty()` проверяет, пуста ли очередь, и метод `print()` выводит элементы очереди в консоль.

### Вы можете использовать этот класс, чтобы создать экземпляр очереди и добавлять/удалять элементы из нее, как показано в последних четырех строках примера.