# aviasales_test

Тестовое задание на позицию Frontend Developer в компанию Aviasales.

Для запуска проекта необходимо выполнить в командной строке:

```sh
$ npm install
$ npm start
```

Задание было протестировано в следующих браузерах:

* IE10, IE11, Edge
* Chrome
* Firefox
* Safari

### Структура проекта:

|-- LICENSE
|-- package.json
|-- README.md
|-- public
|   |-- favicon.ico
|   |-- index.html
|   |-- tickets.json
|-- src
    |-- index.js
    |-- components
    |   |-- App.jsx
    |   |-- Header.jsx
    |   |-- Other.jsx
    |   |-- filter
    |   |   |-- Filter.jsx
    |   |   |-- FilterAll.jsx
    |   |   |-- FilterItem.jsx
    |   |-- tickets
    |       |-- Ticket.jsx
    |       |-- Tickets.jsx
    |-- css
    |   |-- filter.css
    |   |-- header.css
    |   |-- index.css
    |   |-- media.css
    |   |-- tickets.css
    |-- images
    |   |-- airplane.png
    |   |-- aviasales_logo.png
    |-- utils
        |-- app.js
        |-- filter.js
        |-- localStorage.js
        |-- ticket.js