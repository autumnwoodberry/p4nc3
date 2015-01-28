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
    $('.options').append('<button class="check" value="' + category + '"><i class="fa fa-check"></i>' + category.toLowerCase() + '</button>')
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
  var checked = []
  writeCards(current)

  $('#random').click(function(){
    checked = []
    $('.options button').each(function(i, button){
      if ($(this).hasClass('check')){
        checked.push({category: button.value})
      }
    })
    current = Math.floor(Math.random() * cards(checked).count())
    writeCards(current)
  })

  function writeCards(index){
    checked = []
    $('.options button').each(function(i, button){
      if ($(this).hasClass('check')){
        checked.push({category: button.value})
      }
    })
    $('.front p').html(cards(checked).get()[index].front)
    $('.back p').html(cards(checked).get()[index].back)
    $('.meta').html(index+1+' / '+cards().count(checked)+' - [ '+cards(checked).get()[index].category+' ]')
  }

  $('.flip').click(function(){
    console.log('flip!')
    $('.flip').toggleClass('hover')
  })

})
console.log('...Done.')