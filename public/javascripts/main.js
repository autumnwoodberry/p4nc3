console.log('Loading P4NC3...')

var categories = [
  "CARDIAC",
  "DERMATOLOGY",
  "ENDOCRINOLOGY",
  "GI_NUTRITION",
  "GU_LYTES",
  "HEENT",
  "HEMATOLOGY_ONCOLOGY",
  "INFECTIOUS_DISEASE",
  "MUSCULOSKELETAL_RHEUM",
  "NEUROLOGY",
  "PEDIATRICS",
  "PSYCHOLOGY",
  "PULMONARY",
  "REPRODUCTION"
]

var current = 0

$.getJSON('/json/cards.json', function(data){

  var categories = []
  $.each(data, function(i, card){
    if (categories.indexOf(card.category) < 0){
      categories.push(card.category)
    }
  })
  $.each(categories, function(i, category){
    $('.options').append('<button class="check"><i class="fa fa-check"></i>' + category.toLowerCase() + '</button>')
  })
  $('.options button').each(function(i, option){
    $(this).click(function(){
      $(this).toggleClass('check')
      if ($(this).children().hasClass('fa-check')){
        $(this).children().removeClass('fa-check')
        $(this).children().addClass('fa-times')
      } else {
        $(this).children().addClass('fa-check')
        $(this).children().removeClass('fa-times')
      }
    })
  })

  var cards = TAFFY(data)

  writeCards(current)

  $('#next').click(function(){
    current += 1
    if (current > cards().count()-1) {
      current = 0
    }
    writeCards(current)
  })

  $('#random').click(function(){
    current = Math.floor(Math.random() * cards().count())
    writeCards(current)
  })

  function writeCards(index){
    $('.front p').html(cards().get()[index].front)
    $('.back p').html(cards().get()[index].back)
    $('.meta').html(index+1+' / '+cards().count()+' - [ '+cards().get()[index].category+' ]')
  }

  $('.flip').click(function(){
    console.log('flip!')
    $('.flip').toggleClass('hover')
  })

})
console.log('...Done.')