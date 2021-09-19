let age = 2021-1978
console.log (age) + "years"
let ww2 = 1945-1939
console.log (ww2)
let tesla = 759.49 + "years"
console.log (tesla)
let secondsofDay = 60*60*24 + "s"
console.log (secondsofDay)
let hungarians = 10000000/7500000000 + "%"
console.log (hungarians)
let bigger = 9.597000-78871 + "m^2"
console.log (bigger)
let participants = 654/7
console.log (participants)

let trueOrFalse = 5 === 5;
trueOrFalse = 100 < 50;
trueOrFalse = 'hello' !== 'world';
trueOrFalse = 1 >= 2;
trueOrFalse = 'blue'.length === 'green'.length;
trueOrFalse = 3 < 4 && (5 > 6 || 7 < 8);

let names = ['Béla', 'Hedvig', 'Géza', 'János']
trueOrFalse = (names[2].length) > 5
names.push ('Júlia', 'Márk')
console.log (names)

names[0] = "Bea"
console.log (names)

console.log (trueOrFalse = (names.length) > 5)

let post = {
    colors: ['green', 'grey', 'blue', 'yellow', 'red'],
    author: "GézaBéla",
    content: "Colours of my day",
}
post.hasMyColors = trueOrFalse = post.colors.length > 3

console.log (post)
console.log (post.colors)


let myVariable = true;
if (myVariable === true) {
  console.log('A feltétel igazra lett kiértékelve.');
}

let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a / 7);
}

let numbercount = 20
for (let i=2; i < numbercount; i=i+2) {
    console.log (i)
}

let add = (a, b) => {
  return a + b;
};
console.log(add(1, 2))

let printNumbersTill = 21;
for (let i = 1; i < printNumbersTill; i++) {
  console.log (i)
}

/* nem működik: 
let printValues = [0, 3, 6, 7, 9] => {
for (let i = 0; i < printValues.length; i++) {
console.log (printValues [i]) 
  }
} */

let myNumbers = [10, 20, 30, 50, 12];
myNumbers.forEach((number) => {
  // a függvényen belül adhatjuk meg a végrehajtandó műveleteket
  console.log(number);
}); 

let printValues = [0, 3, 6, 7, 9]; 
printValues.forEach((number) => {
  console.log(number);
});

$('#fox-1').text('Macrotis')
$('#fox-2').css("border-color", "purple")
$('p').css("background-color", "yellow")
