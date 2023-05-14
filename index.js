var name = "adrian";

alert(name)

var num1 =window.prompt('skriv ett nummer');
var num2 =window.prompt('skriv ett nummer');


function divison(num1,num2) {

    return console.log(result = parseInt(num1) / parseInt(num2));
}

divison(num1,num2)

for(var i = 1; i< 11;i++) {
    if(i%2==0) {
        console.log(i)
    }
}

function clickMe() {
    document.getElementById("demo").innerHTML = "klicka mig";
}

function biggestLooser() {
    array = [1,2,4,5,7,8,9,0,5,6,89]
    
    console.log(Math.max(...array))
}
biggestLooser()

var num3 =window.prompt('skriv ett nummer');
var num4 =window.prompt('skriv ett nummer');

function calculator(num3,num4) {
    console.log(num3 + num4);
    console.log(num3 - num4);
    console.log(num3 / num4);
    console.log(num3 * num4);
}

var num5 =window.prompt('skriv ett ord');

calculator(num3,num4)

function calculatelength(num5) {
    return console.log(num5.length)
}

calculatelength(num5)
var array = [1,2,3,4,5,6,6];
function arrayDisplayer(array) {
    
    for(var i=0; i< array.length; i++) {
        console.log(array[i])
    }
}

arrayDisplayer(array)

function arraymultiplier(array) {
    var array2 = []
    for(var i=0; i< array.length; i++) {
        var tre = array[i] *2;
        array2.push(tre)
        
    }  
    console.log(array2)
}

arraymultiplier(array)

