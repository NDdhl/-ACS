//---------Menu-item------------------
const top1 = document.querySelector(".top")
window.addEventListener("scroll",function(){ 
  const X = this.pageYOffset; 
  if(X>1){top1.classList.add("active") }
  else {top1.classList.remove("active")}
})


//--------Menu-SLIDEBAR-CARTEGORY------
const itemSliderBar = document.querySelectorAll(".cartegory-left-li");

itemSliderBar.forEach(function(menu) {
    menu.addEventListener("click", function() {
        // Toggle (thêm hoặc loại bỏ) lớp "block" cho mục được nhấn
        menu.classList.toggle("block");

        // Đóng tất cả các menu khác
        itemSliderBar.forEach(function(otherMenu) {
            if (otherMenu !== menu) {
                otherMenu.classList.remove("block");
            }
        });
    });
});


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




/////===================index==================

const menuItems = document.querySelectorAll(".menu-item"); // Lấy tất cả các mục menu chính

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", function(e) {
        // Ngừng sự kiện "click" mặc định để tránh mở liên kết
        e.preventDefault(); 
        // Toggle lớp "active" cho menu con
        menuItem.classList.toggle("active");

        // Đóng các menu con khác khi nhấp vào một mục khác
        menuItems.forEach(function(otherItem) {
            if (otherItem !== menuItem) {
                otherItem.classList.remove("active");
            }
        });
    });
});

const header = document.querySelector("header")
window.addEventListener("scroll", function() {
let scrollY = window.pageYOffset; // Thay thế x bằng window.pageYOffset
if (scrollY > 0) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky"); // Lỗi trong từ "remote", cần thay bằng "remove"
}
})

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')//cho chuyển hình tự động
const dotItem = document.querySelectorAll(".dot")
let imgNuber = imgPosition.length
let index = 0//lúc đầu index = 0
//console.log(imgPosition)
imgPosition.forEach(function(image,index){
    image.style.left = index*100 + "%"//căn hình theo chiều ngang
    dotItem[index].addEventListener("click", function(){
        slide(index)
    })
})
function imgSlide(){
    index++;
    console.log(index)
    if(index>=imgNuber) {index=0;}
    imgContainer.style.left = "-" + index*100 + "%" //sau khi index tăng 1 thì thẻ imgContainer sẽ dịch chuyển sang bên trái âm tuỳ vị trí thẻ con
    slider(index)
}
function slide(index){
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide,2000)



