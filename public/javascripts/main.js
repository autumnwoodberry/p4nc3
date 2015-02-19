$.getJSON('/json/cards.json', function(data){
  var cards = TAFFY(data);
  function write_card(index){
    var card = cards().get()[index]
    $('.front p').html(card.front)
    $('.back p').html(card.back)
    $('.meta').html('[ ' + card.category + ' ]')
  }
  write_card(Math.floor(Math.random() * cards().count()));
  $('.flip').click(function(){
    $('.flip').toggleClass('hover')
  });
  $('#random').click(function(){
    write_card(Math.floor(Math.random() * cards().count()))
  });
});