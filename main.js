/*** Object Constructors ***/
function bear-long(name) {
  this.name=name;
  this.price=price;
  this.art=art;
  this.size=size;

}


/*Global variables*/
var pillows = [new bear(), new Dog(), new bunny()];
var names = ["bear-long", "bear", "bear2-square", "bunny", "bunny2-square", "bunny-round", "bunny-long", "dog", "dog2-square", "dog"];
var colors = ["AquaWhite", "GreenBeige", "RedBlue"]

/*Document load function*/
$(document).ready(function(){
  $("#displayimage").attr("src","images/bear-long.jpg");
  console.log("page has loaded");

  $(".offer").on("click", function () {
      var $checkbox = $(this).find(':checkbox');
      $checkbox.attr('checked', !$checkbox.attr('checked'));
      console.log("checkbox checked")
});
