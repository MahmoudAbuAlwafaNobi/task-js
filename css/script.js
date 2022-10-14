var allProducts = document.querySelectorAll ("h3")

var content = document.querySelector("#content")

var btn = document.querySelector("#addToCart")

var contentprice = document.querySelector("#content-price")

var totalPrice = 0;

allProducts.forEach(function (item){
    item.onclick = function (){

      totalPrice +=  parseInt (item.getAttribute ("price"))
      content.innerHTML += item.textContent + " " ;

      if (content.innerHTML != "" ) {
          btn.style.display = "block"
      }
    }
})
btn.onclick = function (){
  contentprice.innerHTML = totalPrice
}
