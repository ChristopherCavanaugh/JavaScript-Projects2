function count_To_Ten() { //this is a while loop that counts up to ten stopping at 10
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["guitar", "Drums", "piano", "bass", "violin", "Trumpet", "flute"]; // this is a for loop that will display a list of instruments.
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics(){ // this is an example of an array function 
    var Cat_Picture = [];
    Cat_Picture [0] = "sleeping";
    Cat_Picture [1] = "playing";
    Cat_Picture [2] = "eating";
    Cat_Picture [3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() { // function utilizing the constant keyword
    const Musical_Instrument = {type:"Guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "Blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X =82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br" + X)

let car = { // creating object with a let keyword
    make: "Dodge",
    model: "viper",
    year: "2021",
    color: "red",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();