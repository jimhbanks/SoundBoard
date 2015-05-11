// set up event listener in javascript, using PURE JS, by using the class to call every button
var  buttons = document.getElementsByClassName("greeting");
for(var i = 0; i < buttons.length; i++){ 
  buttons[i].addEventListener("click", function(event){
    var output = document.getElementById("output-text");
        var greeting = "WDI 13 speaks: " + this.id;
    showGreeting(this.id);
  })
}
// now make it into a fucntion
var showGreeting = function(language){
  var output = document.getElementById("output-text");
    var greeting = "WDI 13 speaks: " + language;
      output.innerText = greeting


}



































