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
//Tìm phần tử đầu tiên có lớp là .baoquan và gán nó vào biến baoquan
if(baoquan){   //kiểm tra tồn tại
  baoquan.addEventListener("click", function(){  //gắn sự kiện click vào phần tử baoquan, khi sự kiện click xảy ra:
    document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    //Ẩn phần tử có lớp .product-content-right-bottom-content-baoquan
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
    //Hiển thị phần tử có lớp .product-content-right-bottom-content-chitiet
  })
}
if(chitiet){ 
  chitiet.addEventListener("click", function(){
    document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
  })
}
const butTon= document.querySelector(".product-content-right-bottom-top")
if(butTon){
  butTon.addEventListener("click", function(){
    document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    //Nếu phần tử đã có lớp activeB, thì .toggle("activeB") sẽ xóa lớp đó
    //Nếu phần tử chưa có lớp activeB, thì .toggle("activeB") sẽ thêm lớp đó vào phần tử
  })
}
