/*** Object Constructors ***/
function bear-long(name) {
  this.price = price;
  this.art = "images/bear-long.jpg";
  this.size = "long";
}

function bear(name) {
  this.price = price;
  this.art = "images/bear.jpg";
  this.size = "bear";
}

function bear2-square(name) {
  this.price = price;
  this.art = "images/bear2-square.jpg";
  this.size = "square";
}

function bunny-long(name) {
  this.price = price;
  this.art = "images/bunny-long.jpg";
  this.size = "bunny-long";
}

function bunny-round(name) {
  this.price = price;
  this.art = "images/bunny-round.jpg";
  this.size = "bunny-round";
  this,color = ;
}

function bunny-square(name) {
  this.price = price;
  this.art = "images/bunny-square.jpg";
  this.size = "bunny-square";
  this,color = ;

}

function bunny2-square(name) {
  this.price = price;
  this.art = "images/bunny2-square.jpg";
  this.size = "bunny2-square";
  this,color = ;
}

function dog-long(name) {
  this.price = price;
  this.art = "images/dog-long.jpg";
  this.size = "dog-long";
  this,color = ;
}

function dog-round(name) {
  this.price = price;
  this.art = "images/dog-round.jpg";
  this.size = "dog-round";
  this,color = ;
}

function dog-square(name) {
  this.price = price;
  this.art = "images/dog-square.jpg";
  this.size = "dog-square";
  this,color = ;
}

function dog2-square(name) {
  this.price = price;
  this.art = "images/dog2-square.jpg";
  this.size = "dog2-square";
  this,color = ;
}

/*Global variables*/
var pillows = [new bear(), new Dog(), new bunny()];
var names = ["bear-long", "bear", "bear2-square", "bunny", "bunny2-square", "bunny-round", "bunny-long", "dog", "dog2-square", "dog"];
var colors = ["AquaWhite", "GreenBeige", "RedBlue"]


$(document).ready(function(){
  $("#displayimage").attr("src","images/bear-long.jpg");
  console.log("page has loaded");
});
