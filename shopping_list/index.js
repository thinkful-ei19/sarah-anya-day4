'use strict';

const shoppingList = $('.js-shopping-list');

function AddItems () {
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault()
  const inputItem = $('.js-shopping-list-entry');
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
};

function CheckItems() {
  shoppingList.on('click', '.shopping-item-toggle', function(event) {
    $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })
}

function DeleteItems() {
  shoppingList.on('click', '.shopping-item-delete', function(event) {
    $(event.target).closest('li').remove();
  })
}

$(AddItems())
$(CheckItems());
$(DeleteItems());
