
$('button').on('click', () => {
    $('ul').append(<li> + $('.input').text()<li>)
});



/*

$(".button").click(() => {
    $("ul").append($('.input'));
   
    $(this).toggleClass('line-through');
 })

 
$('.button2').click(() => {
    $('.button1').text('Új szöveg');
 })
 


 $('.button3').click(() => {
    $('.button3').css('background-color', $('.bevitelimezo').val());
    $('.button3').attr('disabled', true)
 })



 $("gomb").click(function() {
    var newItem = $("input").val()
    $("ul").append("<li><span>" + newItem + "</span><i class='fas fa-trash-alt'></i><i class='far fa-check-circle'></i></li>")
    $("input").val("")
})

*/
