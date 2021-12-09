# Cronometer
 
I made this project to practice:
 
* JavaScript Classes.
* setInterval method.
 
This program is a cronometer that responds to 3 commands: start, stop and reset.
 
I created a class called Timer to define 3 methods:
* The start method: it can only be activated if the variable "this.active" is false, in other words, if the cronometer is on pause. If it is paused, by using the setInterval method, the this.number variable value will be incremented every
hundredth of a second. Also, it changes the variable "this.change" value to the this.number value.
* The stop method: it stops the setInterval by using the "clearInterval" method, and also changes the variable "this.active" value to false.
* The reset method: it calls the stop method and changes the variable "this.change" value to the "this.number" value.
 
Then, I created the function changeNumber to convert the "this.change" numbers value into the hexadecimal system and put them into the DOM.
 
Finally I create a "new Timer" and pass the changeNumber function as a parameter.
