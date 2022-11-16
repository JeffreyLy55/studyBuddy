const title_a = document.getElementById('main-heading');
title_a.innerText = "Favorite Class";
title_a.style.fontSize = '3rem';
title_a.style.color = 'purple';
console.log(title_a);

const listItems = document.getElementsByClassName('list-items');

for (i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize = '1rem';
}

const tagNames = document.getElementsByTagName('li');
tagNames[3].style.color = 'red';

const firstDiv = document.querySelector('div');
firstDiv.style.color = 'blue';
const title_b = document.querySelector('#main-heading');
title_b.style.color = 'green';

const allDiv = document.querySelectorAll('div');
allDiv.style.color = 'blue';

const get_ul = document.querySelector('ul');

const put_li = document.createElement('li');


get_ul.append(put_li);

put_li.innerText = 'Yogurt';