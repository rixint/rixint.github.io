
var clicks = 0;

$('.button1').click(() => {
    $('.header2').text(clicks +=1);
}) 

$('.button2').click(() => {
    $('.header2').text(clicks -=1);
}) 
