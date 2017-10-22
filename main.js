/*** Object Constructors ***/
function pillow() {
  this.name=name;
  this.price=price;
  this.art=art;
  this.size=size;
  this.detail=detail;
}

/*Document load function*/
$(document).ready(function(){
  // $("#displayimage").attr("src","images/bear-long.jpg");
  // console.log("page has loaded");

$("size-dropdown").change (function(){
  if (this.value == "long") {
    $("image src").attr("src","images/bear-long.jpg")
    $("textfield").text("Curl up with this long body pillow")

  }else if (this.value) == "round") {
    $("").attr("src","image/")
    $("").text("yeah yeah yeah")

  }else if (this.value) == "") {
    $("").attr("src","image/")
    $("").text("yeah yeah yeah")

  }

  }

});
