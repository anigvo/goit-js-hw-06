const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const containter = document.querySelector('#ingredients');


const markup = ingredients.map(item => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = item;
  li.append(p)
  li.classList.add('item');
  
  return li;
});
console.log(markup)
containter.append(...markup);