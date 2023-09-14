﻿# Что такое Vue.js?

### Vue.js - это прогрессивный фреймворк для разработки веб-приложений и пользовательских интерфейсов. Он является открытым исходным кодом и предоставляет инструменты для создания интерактивных веб-приложений с помощью [JavaScript](https://github.com/frontsteron/Pet-projects/tree/main/WhatIsHTML%2BCSS%2BJS/JavaScript#что-такое-javascript).

### Основные особенности Vue.js включают:

- ### **Простоту изучения и использования:** Vue.js создан с учетом простоты и понимания, что делает его доступным для начинающих разработчиков. В то же время, он предоставляет мощные инструменты для создания сложных приложений.

- ### **Двустороннюю привязку данных:** Vue.js предоставляет простой способ связывать данные с элементами интерфейса, что позволяет автоматически обновлять UI при изменении данных и наоборот.

- ### **Компонентную архитектуру:** Приложения Vue.js строятся на основе компонентов, которые могут быть многократно использованы и вложены друг в друга. Это способствует созданию модульного и поддерживаемого кода.

- ### **Реактивность:** Vue.js следит за изменениями данных и автоматически обновляет соответствующие части пользовательского интерфейса без явного вмешательства разработчика.

- ### **Директивы:** Фреймворк предоставляет множество встроенных директив (например, `v-on`, `v-html`, `v-if`, `v-else`, `v-show`, `v-for`, `v-bind` и др.), которые позволяют добавлять интерактивное поведение к элементам DOM.

- ### **Удобный шаблонный язык:** Vue.js использует синтаксис шаблонов, который напоминает HTML и упрощает создание интерфейса.

- ### **Экосистема и сообщество:** Vue.js имеет активное сообщество разработчиков, которые создают множество плагинов и расширений, что делает его более мощным и гибким.

- ### **Поддержка серверного рендеринга:** Vue.js позволяет создавать приложения с возможностью серверного рендеринга (Server-Side Rendering, SSR), что улучшает SEO и ускоряет начальную загрузку страниц.

### Vue.js можно использовать для разработки разнообразных веб-приложений, включая одностраничные приложения (SPA), мобильные приложения и другие типы веб-проектов.

### Подключаем скриптовый файл в теге `<head>` HTML документа. Делаем отдельный файл чтобы не нагружать **html** документ(_чтобы было легче поддерживать код_) и чтобы быстрее загружались страницы.

### Подключение скриптовых файлов в `<head>` имеет некоторые преимущества:

1. ### **Параллельная загрузка:** Браузеры могут начать загрузку скриптовых файлов параллельно с загрузкой других ресурсов, таких как стили и изображения. Это может ускорить загрузку страницы, так как браузер не будет блокировать рендеринг страницы, ожидая загрузки скриптов.

2. ### **Кеширование:** Если скриптовый файл подключен в `<head>`, то он может быть кэширован браузером для последующих посещений страницы. Это также может повысить производительность и уменьшить нагрузку на сервер.

### Однако есть также некоторые соображения:

1. ### **Блокирующий рендеринг:** Если скрипт находится в `<head>` и имеет большой размер или требует много времени на выполнение, он может замедлить начальный рендеринг страницы, поскольку браузер должен будет загрузить и выполнить скрипт перед отображением содержимого страницы.

2. ### **Порядок выполнения:** Скрипты, расположенные в `<head>`, выполняются до того, как браузер даже начнет парсить основное содержимое страницы. Это может быть важно для скриптов, которые взаимодействуют с элементами DOM.

### Если вы хотите поддерживать код в отдельных файлах для упрощения его управления, вы можете разместить ваши скрипты внутри внешних файлов JavaScript и подключить их в теге `<head>` с помощью тега `<script>`. Например:

```html
<head>
  <!-- Подключение библиотеки Vue.js из внешнего файла -->
  <script src="vue.js"></script>
  <!-- Подключаем библиотеку Vue.js из CDN (Content Delivery Network) -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14"></script>
</head>
```

### Это позволит разделить код на более управляемые файлы и легче поддерживать его, при этом сохраняя преимущества параллельной загрузки и кеширования.

### Стандартная запись в Vue.js включает в себя создание экземпляра Vue и определение объекта конфигурации, который описывает данные, методы и элементы DOM, связанные с экземпляром. Вот базовая структура стандартной записи в Vue.js:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Пример Vue.js</title>
    <!-- Подключение библиотеки Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
  </head>
  <body>
    <!-- Начало тела HTML-документа -->
    <div id="app">
      <!-- Элемент, связанный с Vue.js, в котором будет отображаться сообщение -->
      {{ message }}
      <!-- Это выражение Vue.js будет заменено на значение переменной message -->
    </div>

    <script>
      // Начало скрипта JavaScript
      // Создание экземпляра Vue
      var app = new Vue({
        el: "#app", // ID элемента DOM, к которому привязывается Vue
        data: {
          message: "Привет, Vue!", // Инициализация переменной message значением "Привет, Vue!"
        },
      });
      // Конец скрипта JavaScript
    </script>
    <!-- Конец тела HTML-документа -->
  </body>
</html>
```

### Этот пример включает в себя следующие основные элементы:

1. ### **Подключение Vue.js:** Вы подключаете библиотеку Vue.js с помощью тега `<script>`, указывая ссылку на CDN. В данном случае, используется версия 2.7.14.

2. ### **HTML-разметка:** Внутри элемента `<div id="app">` вы можете размещать содержимое, связанное с Vue.js, используя двойные фигурные скобки `{{}}`. В этом примере, `{{ message }}` будет отображать значение `message`.

3. ### **Создание экземпляра Vue:** Вы создаете экземпляр Vue с помощью `new Vue({ ... })`. Объект конфигурации передается в этот экземпляр и включает в себя `el` (элемент DOM, к которому привязан Vue) и `data` (данные, которые могут быть связаны с элементами в шаблоне).

4. ### **Инстанс Vue и данные:** В этом примере, мы создаем экземпляр Vue с именем `app`, указываем `el` как `'#app'`, что означает, что Vue связывается с элементом с `id="app"`. Мы также определяем `data` объект с переменной `message`, которая будет отображаться в элементе, связанном с Vue.

### При запуске этого кода, вы увидите "Привет, Vue!" отображенным в браузере внутри элемента с `id="app"`. Это простейший пример Vue.js приложения.

---

### Vue.js предоставляет множество директив, которые позволяют вам управлять отображением и поведением элементов в вашем приложении. Вот некоторые из популярных директив Vue.js:

1. ### **v-model**: Используется для создания двусторонней привязки данных. Он позволяет вам связывать значение элемента формы с данными в модели Vue.

   ```html
   <input v-model="message" />
   ```

2. ### **v-for**: Используется для создания циклов и рендеринга элементов в списке на основе данных из массива или объекта.

   ```html
   <ul>
     <li v-for="item in items">{{ item.text }}</li>
   </ul>
   ```

3. ### **v-if** / **v-else** / **v-else-if**: Используется для условного рендеринга элементов на основе значений выражений.

   ```html
   <p v-if="seen">Этот элемент отображается</p>
   ```

4. ### **v-on** / **@**: Используется для прослушивания событий и связывания их с методами Vue.

   ```html
   <button v-on:click="doSomething">Нажми меня</button>
   <!-- Или с сокращенным синтаксисом @ -->
   <button @click="doSomething">Нажми меня</button>
   ```

5. ### **v-bind** / **:**: Используется для связывания атрибутов элемента с данными в модели Vue.

   ```html
   <img v-bind:src="imageSrc" />
   <!-- Или с сокращенным синтаксисом : -->
   <img :src="imageSrc" />
   ```

6. ### **v-show**: Используется для условного отображения элементов, меняя их видимость с помощью CSS.

   ```html
   <p v-show="isVisible">Этот элемент виден</p>
   ```

7. ### **v-pre**: Используется для предварительного форматирования текстового содержимого элемента, чтобы Vue.js его не интерпретировал как директиву.

   ```html
   <p v-pre>{{ не будет интерпретировано как директива Vue }}</p>
   ```

8. ### **v-cloak**: Используется для предотвращения отображения необработанных меток Vue.js до завершения их компиляции.

   ```html
   <div v-cloak>{{ message }}</div>
   ```

9. ### **v-once**: Используется для однократного рендеринга элемента и его потомков. После первого рендеринга изменения в данных не будут повторно отображаться.

   ```html
   <p v-once>{{ message }}</p>
   ```

### Это лишь небольшой набор директив Vue.js. Vue.js предоставляет множество других директив, которые позволяют управлять различными аспектами вашего приложения.

---