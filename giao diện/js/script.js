//---------Menu-item------------------
const top = document.querySelector(".top")
window.addEventListener("scroll",function(){ 
  const X = this.pageYOffset; 
  if(X>1){top.classList.add("active") }
  else {top.classList.remove("active")}
})
//--------Menu-SLIDEBAR-CARTEGORY------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
  menu.addEventListener("click", function(){
  menu.classList.toggle("block")     })
})
//--------PRODUCT--------------------

const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")

if(baoquan){
  baoquan.addEventListener("click", function(){
    document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
  })
}
if(chitiet){
  chitiet.addEventListener("click", function(){
    document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
  })
}
const butTon= document.squerySelector(".product-content-right-bottom-top")
if(butTon){
  butTon.addEventListener("click", function(){
    document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
  })
}