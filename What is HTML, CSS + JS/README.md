# Here is an instruction about HTML, CSS and a little JS.

## Что такое HTML? 

### Это язык гипертекстовой разметки для просмотра веб-страницы в браузере.

### Так выглядит стандартная html страница 5ой версии.

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   
</body>
</html>
```
### Чтобы её получить нужно в редакторе кода набрать восклицательнай(*!*) знак.

### Где тег **title** означает заголовок веб-страницы.

### Затем подключаем файл стелей(*CSS*) вверху страницы(*в теге head*). Делаем отдельный файл чтобы не нагружать html документ.

```html
<head>
   <link rel="stylesheet" href="Style/style.css">
</head>
```
### Где атрибут **rel** означает "отношения(*relationship*)", а атрибут **href** определяет URL(*единый указатель ресурса/адресс*) связываемого ресурса.