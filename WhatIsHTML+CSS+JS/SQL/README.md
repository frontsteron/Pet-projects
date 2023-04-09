# SQL
### Язык структурированных запросов, является языком программирования, который применяется для управления реляционными базами данных. **SQL** состоит из множества команд, используемых для создания, изменения и управления данными в базе данных.

### Новая база данных создается с помощью оператора `CREATE DATABASE`, за которым следует имя создаваемой базы данных. Для этой цели также используется оператор `CREATE SCHEMA`. Например, для создания новой базы данных под названием **database_study** в командной строке **mysql** нужно ввести следующий запрос:
```SQL
CREATE DATABASE database_study; 
```
### Проверить, что база появилась можно командой:
```SQL
SHOW DATABASES; -- А это и это # комментарии, либо многстрочные /* comment */
```
### Подключить/удалить базу данных:
```SQL
USE database_study; -- Подключить БД
DROP DATABASE database_study; -- Удалить БД
```
---
### Реляционные базы данных хранят данные в таблицах, внутри которой содержатся некоторые столбцы. Каждый столбец имеет **имя** и **тип данных**. 
### Для создания таблиц используется команда `CREATE TABLE`, а для удаления/переименования `DROP TABLE`/`RENAME TABLE`:
```SQL
CREATE TABLE table_name
(
	column_name_1 column_type_1,
	
	column_name_2 column_type_2,
	
	column_name_N column_type_N,

);
DROP TABLE table_name;  -- Удалить таблицу
RENAME TABLE table_name TO table_rename; -- Изменить имя таблицы "table_name" на table_rename"
```
---

### Вставка данных
`INSERT` – вставка новых данных
```SQL
-- Пусть имеются 2 столбца в таблицe Table: сolumn1, сolumn2
-- 1. Заполняeтся только 1 столбец в таблицe Table
INSERT Table (сolumn1)
VALUES (value1);
-- 2. Заполняются все столбцы в таблицe Table. 
INSERT Table
VALUES (value1, value2);
```
### Заполним нашу таблицу “Покупатели” данными 2мя способами:
```SQL
-- Первый способ
-- DATE - format YYYY-MM-DD
-- DATETIME - format: YYYY-MM-DD HH:MI:SS
-- TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
-- YEAR - format YYYY or YY
-- Способ №1
INSERT Buyer (date_birt, first_name,last_name,mobile_phone)
VALUES
  ("2023-01-01", "Михаил", "Меркушов", "+7-999-888-77-66"), -- id = 1
  ("2022-12-31", "Сергей", "Сергеев", "60-70-80"), -- id = 2
  ("2022-12-30", "Том", "Круз", "80-70-80"), -- id = 3
  ("2022-01-02", "Филл", "Поляков", "+7-999-888-77-55"); -- id = 
  
-- Второй способ
-- DATE - format YYYY-MM-DD
-- DATETIME - format: YYYY-MM-DD HH:MI:SS
-- TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
-- YEAR - format YYYY or YY
INSERT Buyer
VALUES
  (1, "2023-01-01", "Михаил", "Меркушов", "+7-999-888-77-66"), 
  (2, "2022-12-31", "Сергей", "Сергеев", "60-70-80"),
  (3, "2022-12-30", "Том", "Круз", "80-70-80"),
  (4, "2022-01-02", "Филл", "Поляков", "+7-999-888-77-55");
```