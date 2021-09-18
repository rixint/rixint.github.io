let nevem = "Bea"
let azEnkorom = 17
console.log("A javascript is betoltott.")


if (azEnkorom >= 18) {
    console.log("Már elég idős ahhoz, hogy igyon egy sört")
}
else {
    console.log("Még nem léphetsz be dohányboltba")
}

let masikKor = 18

if (masikKor > 18) {
    console.log("A masik is elég idős, hogy igyon egy sört")
}

console.log("ez itt a vége")

//jquerys resz

console.log($("h1").text())
$("h1").text("Ezt javascriptből valtoztattuk meg")

console.log($(".sarga").css("background-color"))
$(".sarga").css("background-color", "magenta")

$("#hozzaado").click(function (){
    $("ul").append("<li>ujabb elem</li>")
 })

$("#torlo").click(() => {
    $("li:last-of-type").remove ()
} )

for (let i=0; i<100; i=i+1) {
    $("ul").append(`<li>${i+1}. Nem csalok tobbet a vizsgan.</li>`)
}

let szinek = ["orange", "magenta", "red", "brown", "blue", "teal"]

function egySzinDoboz(szin) {
    $(".kontener").append(`<div class="doboz"></div>`)
    $('.kontener div:last-of-type').css("background-color", szin)
}

egySzinDoboz("lime")
egySzinDoboz("pink")

szinek.forEach (egySzinDoboz)
