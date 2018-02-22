'use strict';

$(function() {
  $('.thumbnails').on('click', '.thumbnail', function(event) {
    $('.hero').html($(event.currentTarget).html());
    console.log($(event.currentTarget).html());
  });
}
);