/*** Object Constructors ***/
function Pillow(itemDef, price, art, size, detail) {
  this.image=image;
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
  //console.log("document is ready");
  //get items from storage and show on cart page
    var objectRetreive = JSON.parse(localStorage.getItem('itemsArray'))|| [];

    console.log("This is obj" + " " + localStorage.getItem('itemsArray'));

    for (var i = 0; i<objectRetreive.length; i++){
      var item1 = JSON.parse(localStorage.getItem('itemsArray'))[i];
      //get image
      var image =item1.imageSelection;

    //get price
      var price = item1.selectedPrice;

      //get details
      var def = item1.selectedItemDef;


      $( "#mainpage-4" ).append( "<div class='shoppingCart'><img class='image' src="+image+"><div class='productnotes'><div id='detailhead'></div><div><p id='itemDef'>"+def+"</p></div><div id='Premocheck'><div id='price'><h6>"+price+"</h6></div><div id='"+[i]+"'><button type='button' value='remove'>Remove</button></div></div>" );
    }

//change the image and text of the product based on size selection
$("#selectSize").change (function(){
  if (this.value == "long") {
    $("#productImg").attr('src','images/dog-long.jpg');
    //console.log("dog-longlonglonglonglonglonglonglonglonglonglonglonglonglong");
    $("#price").text("$40.00");

    $("#itemDef").text("Dog Bed Pillow -firm");


    //$('#id').attr('src', 'newImage.jpg');

  }else if (this.value == "round") {
    $("#productImg").attr("src","images/dog-round.jpg");
    $("#price").text("$25.00");
    $("#itemDef").text("Dog Couch Pillow");
    //console.log("round roundroundroundroundroundroundround");

  }else if (this.value == "square") {
    $("#productImg").attr("src","images/dog-square.jpg");
    $("#price").text("$25.00");
    $("#itemDef").text("Dog Couch Pillow");
    //console.log("square has loaded");

  }
})

//change the image and text of the product based on the artwork on the pillow
$("#selectArt").change (function(){
  if (this.value == "bear") {
    $("#productImg").attr("src","images/bear.jpg")
    $("#price").text("$15.00")
    $("#itemDef").text("Bear Couch Pillow")
    //console.log("bear has loaded");

  }else if (this.value == "bunny") {
    $("#productImg").attr("src","images/bunny-square.jpg")
    $("#price").text("$35.00")
    $("#itemDef").text("Dog Couch Pillow")
    //console.log("Bunny has loaded");

  }else if (this.value == "dog") {
    $("#productImg").attr("src","images/dog-square.jpg")
    $("#price").text("$25.00")
    $("#itemDef").text("Dog Couch Pillow")
    //console.log("dog has loaded");
  }
})

//Trigger to add items to the cart
$("#addCartProduct").click(function(){
  var imageSelection=$("#productImg").attr('src');
  var selectSizeSelection=$("#select-size option:selected").val();
  var selectArtSelection=$("#selectArt option:selected").val();
  var selectedIncDec=$("#incdec option:selected").val();
  var selectedPrice=$("#price").text();
  var selectedItemDef=$("#itemDef").text();

  //New product with infor above
  var selectedCartItem = {imageSelection, selectSizeSelection,selectArtSelection, selectedIncDec, selectedPrice, selectedItemDef};

  var addedItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

  //add new product to the array
  addedItems.push(selectedCartItem);
  //console.log(selectedCartItem)

  localStorage.setItem("itemsArray", JSON.stringify(addedItems));

  console.log("This is itemsArray" + " " + localStorage.getItem('itemsArray'));
})


$("button").click(function(){
  var addedItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
  var j = $(this).attr("id");
  console.log(j);
  addedItems.splice(j,1);
  localStorage.setItem("itemsArray", JSON.stringify(addedItems));
    location.reload();
        console.log("removed");
      })

})
