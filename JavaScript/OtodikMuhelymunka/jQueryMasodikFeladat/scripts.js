let variables = {
    color: 'purple',
    number: '10',
    word: 'cool',
}


if (variables.color = 'purple') {
    $('.red').css('background-color','purple')
 }


if (variables.number > 100) {
    $('.yellow').text('wow, de nagy szám')
 } else {
    $('.yellow').text('ez csak egy közönséges szám')
 }

 if (variables.word = 'cool') {
    $('.lightblue').text('A DOM Ereje')
 } else {
    $('.blue').text('cool')
 }
