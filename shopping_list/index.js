'use strict';

function AddItems () {
const shoppingList = $('.js-shopping-list');
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault()
  const inputItem = $('.js-shopping-list-entry');
  console.log(inputItem);
  let newHTML = (  `
  <li>
    <span class="shopping-item">${inputItem.val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
`);
  shoppingList.append(newHTML);
});
console.log('add item ran');
};

// function CheckItems

// function DeleteItems

$(AddItems())