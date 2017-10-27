/*** Object Constructors ***/
function Pillow(itemDef, price, art, size, detail) {
  this.itemDef=itemDef;
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

  //load array with information item from product detail page


//change the image and text of the product based on size selection
$("#selectSize").change (function(){
  if (this.value == "long") {
    $("#square").attr("src","images/dog-long.jpg")
    $("#price").text("$40.00")
    $("#itemDef").text("Dog Bed Pillow -firm")
    console.log("page has loaded");

  }else if (this.value == "round") {
    $("#square").attr("src","images/dog-round.jpg")
    $("#price").text("$25.00")
    $("#itemDef").text("Dog Couch Pillow")
    console.log("round has loaded");

  }else if (this.value == "square") {
    $("#square").attr("src","images/dog2-square.jpg")
    $("#price").text("$25.00")
    $("#itemDef").text("Dog Couch Pillow")
    console.log("square has loaded");

  }
})

//change the image and text of the product based on the artwork on the pillow
$("#selectArt").change (function(){
  if (this.value == "bear") {
    $("#square").attr("src","images/bear.jpg")
    $("#price").text("$25.00")
    $("#itemDef").text("Bear Couch Pillow")
    console.log("bear has loaded");

  }else if (this.value == "bunny") {
    $("#square").attr("src","images/bunny-square.jpg")
    $("#price").text("$25.00")
    $("#itemDef").text("Dog Couch Pillow")
    console.log("Bunny has loaded");

  }else if (this.value == "dog") {
    $("#square").attr("src","images/dog-square.jpg")
    $("#price").text("$25.00")
    $("#itemDef").text("Dog Couch Pillow")
    console.log("dog has loaded");
  }
})

//Trigger to add items to the cart
$("#addCartProduct").click(function(){
  var selectSizeSelection=$("#select-size option:selected").val();
  var selectArtSelection=$("#selectArt option:selected").val();
  var selectedincdec=$("incdec option:selected").val();
  var selectedPrice=$("#price").text();
  //console.log("This is selectedPrice" + " " + selectedPrice);
  var selecteditemDef=$("#itemDef").text();

  //New product with infor above
  var selectedCartItem = {selectSizeSelection,selectArtSelection, selectedincdec, selectedPrice, selecteditemDef};

  var addedItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

  //add new product to the array
  addedItems.push(selectedCartItem);
  //console.log(selectedCartItem)

  localStorage.setItem("itemsArray", JSON.stringify(addedItems));

  console.log("This is itemsArray" + " " + JSON.stringify(addedItems));
})

$("button").click(function(){
        $("p").remove();
        console.log(removed);
      })


})
