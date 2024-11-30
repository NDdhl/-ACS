//---------Menu-item------------------
const top1 = document.querySelector(".top")
window.addEventListener("scroll",function(){ 
  const X = this.pageYOffset; 
  if(X>1){top1.classList.add("active") }
  else {top1.classList.remove("active")}
})
//--------Menu-SLIDEBAR-CARTEGORY------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
  menu.addEventListener("click", function(){
  menu.classList.toggle("block")     })
})
//--------PRODUCT--------------------

const baoquan = document.querySelector(".baoquan");
const chitiet = document.querySelector(".chitiet");

const baoquanContent = document.querySelector(".product-content-right-bottom-content-baoquan");
const chitietContent = document.querySelector(".product-content-right-bottom-content-chitiet");

if (baoquan && chitiet && baoquanContent && chitietContent) {
    baoquan.addEventListener("click", function () {
        chitietContent.classList.remove("active");  // Ẩn "Chi tiết"
        baoquanContent.classList.add("active");     // Hiển thị "Bảo quản"
    });

    chitiet.addEventListener("click", function () {
        baoquanContent.classList.remove("active");  // Ẩn "Bảo quản"
        chitietContent.classList.add("active");     // Hiển thị "Chi tiết"
    });
}

const butTon = document.querySelector(".product-content-right-bottom-top");
const contentBig = document.querySelector(".product-content-right-bottom-content-big");

if (butTon && contentBig) {
   butTon.addEventListener("click", function () {
      contentBig.classList.toggle("activeB");
   });
}

