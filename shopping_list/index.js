'use strict';
/*global $*/

const shoppingList = $('.js-shopping-list');

let newHTML = (
  `
  <li>
    <span class="shopping-item"></span>
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


function addItems () {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const inputItem = $('.js-shopping-list-entry').val();
    const toAppendItem = $(newHTML);
    toAppendItem.find('.shopping-item').text(inputItem);
    shoppingList.append(toAppendItem);
  });
}

function checkItems() {
  shoppingList.on('click', '.shopping-item-toggle', function(event) {
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function deleteItems() {
  shoppingList.on('click', '.shopping-item-delete', function(event) {
    $(event.target).closest('li').remove();
  });
}

function attachEventListeners() {
  addItems();
  checkItems();
  deleteItems(); 
}

$(attachEventListeners);

