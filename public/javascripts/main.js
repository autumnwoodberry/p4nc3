(function () {
  var $front = $('.front p');
  var $back = $('.back p');
  var $meta = $('.meta-content');
  var $flip = $('.flip');
  var $random = $('#random');

  $.getJSON('/json/cards.json', function (response) {
    var cards = response;

    function updateCard(index) {
      var card = cards[index];

      $front.html(card.front);
      $back.html(card.back);
      $meta.html(card.category);
    }

    function randomIndex() {
      return Math.floor(Math.random() * cards.length);
    }

    // make the initial card
    updateCard(randomIndex());

    // flip the card when a user clicks it
    $flip.click(function () {
      $flip.toggleClass('hover');
    });

    $random.click(function () {
      updateCard(randomIndex());
    });
  });
})();
