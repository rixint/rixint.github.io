

//mindkét megoldás működik!
//1.

$('.button1').click(() => {
    "addeventlistener", console.log('Igen, most rámkattintottál')
}) 

//2.
/*
$(".button1").click(() => {
    "click", console.log('Igen, most rámkattintottál')
} )
*/



$('.button2').click(() => {
    $('.button1').text('Új szöveg');
 })
 


 $('.button3').click(() => {
    $('.button3').css('background-color', $('.bevitelimezo').val());
    $('.button3').attr('disabled', true)
 })


