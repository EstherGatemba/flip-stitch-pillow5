/*** Object Constructors ***/
function pillow(name, price, art, size, detail) {
  this.name=name;
  this.price=price;
  this.art=art;
  this.size=size;
  this.detail=detail;
}

// function myFunction() {
//     confirm("Submitted!");
// }
//show prompt message box for customization request

function myFunction() {
    var custom = prompt("Please enter your specifications");
    if (custom != null) {
        document.getElementById("demo").innerHTML =
        "Your specifications below were added to your order " + custom + "You can now add this item to the cart";
    }
}

//Document load function

$(document).ready(function(){
  console.log("document is ready");
  // $("#displayimage").attr("src","images/bear-long.jpg");
  // console.log("page has loaded");

//change the image and text of the product based on size selection
$("#select-size").change (function(){
  if (this.value == "long") {
    $("#square").attr("src","images/dog-long.jpg")
    $("#price").text("$25.00")
    $("#item-def").text("Dog Couch Pillow")
    console.log("page has loaded");

  }else if (this.value == "round") {
    $("#square").attr("src","images/dog-round.jpg")
    $("#price").text("$25.00")
    $("#item-def").text("Dog Couch Pillow")
    console.log("round has loaded");

  }else if (this.value == "square") {
    $("#square").attr("src","images/dog2-square.jpg")
    $("#price").text("$25.00")
    $("#item-def").text("Dog Couch Pillow")
    console.log("square has loaded");

  }
})

//change the image and text of the product based on the artwork on the pillow
$("#select-art").change (function(){
  if (this.value == "bear") {
    $("#square").attr("src","images/bear.jpg")
    $("#price").text("$25.00")
    $("#item-def").text("Bear Couch Pillow")
    console.log("bear has loaded");

  }else if (this.value == "bunny") {
    $("#square").attr("src","images/bunny-square.jpg")
    $("#price").text("$25.00")
    $("#item-def").text("Dog Couch Pillow")
    console.log("Bunny has loaded");

  }else if (this.value == "dog") {
    $("#square").attr("src","images/dog-square.jpg")
    $("#price").text("$25.00")
    $("#item-def").text("Dog Couch Pillow")
    console.log("dog has loaded");
  }
})

//Trigger to add items to the cart
$("#addcart").click(function(){
  var selectSizeSelection=$("select-size option:selected").text();
  var selectArtSelection=$("select-size option:selected").text();


})



})
