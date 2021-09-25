
$("button").click(() => {
    var newItem = $("input").val()
    $("ul").append("<li>" + newItem + "</li>")
    $("input").val("")
})