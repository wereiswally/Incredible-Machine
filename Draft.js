const prompt = question("readline-sync")

port: "COM3"

//variables
board.on("ready", () => {
const {Board, Button,Led,Motion, Piezo} = require("johnny-five");
const resetButton = new Button();
const armButton = new Button ();
const Rlight = new Led ();
const Glight = new Led();
const Buzzer = new Piezo();
const inSensor = new Motion();
const outSensor = new Motion();
const board = new Board();

//this is when the machine is running, and tracking the people in the store (sensors)
function activated(){

};
//when its been deactivated, when someone has turned off the machine with the button (button)
function standby (){

};

function greenLight (){

}

function redLight (){

}

function buzzer (){

}

armButton.on("press",function() {

})
});