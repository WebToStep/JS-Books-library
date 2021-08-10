'use strict';

let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');

// #1
let library = [];

books.innerHTML = '';
book.forEach(i => {
   let value = i.textContent.trim()[6];
   library[value - 1] = i;
});

library.forEach(i => {
   books.insertAdjacentElement('beforeend', i);
});
// обновляем значение
book = document.querySelectorAll('.book');
// #2
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// #3
document.querySelectorAll('.book')[2].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

// #4
document.querySelector('.adv').remove();

// #5
let b2 = book[1].querySelectorAll('li');
let b5 = book[4].querySelectorAll('li');
b2[4].before(b2[6]);
b2[4].before(b2[8]);

b5[2].before(b5[9]);
b5[2].before(b5[3]);
b5[2].before(b5[4]);

// #6
let newTom = document.createElement('li');
let b6 = book[5].querySelectorAll('li');

b6[9].before(newTom);
newTom.textContent ='Глава 8: За пределами ES6';
