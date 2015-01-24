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
  var cards = TAFFY(data)
  writeCards(0)
  $('#next').click(function(){
    current += 1
    if (current > cards().count()-1) {
      current = 0
    }
    writeCards(current)
  })
  $('#previous').click(function(){
    current -= 1
    if (current < 0){
      current = cards().count()-1
    }
    writeCards(current)
  })
  function writeCards(index){
    $('.front p').html(cards().get()[index].front)
    $('.back p').html(cards().get()[index].back)
  }
})
console.log('...Done.')