var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 3,
  // //		 slidesPerGroup:3,
  //     spaceBetween: 260,
  centeredSlides: true,
  //		grabCursor:true,
  loop: true,
  //      loopFillGroupWithBlank: true,
  autoplay: {
      delay: 3500,
      disableOnInteration: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: "#btn-next",
      prevEl: "#btn-prev",
  },

  breakpoints: {
      300: {
          slidesPerView: 2,
          spaceBetween: 80,
      },
      1400: {
          slidesPerView: 2.5,
          spaceBetween: 220,
      }
  }
});

$(document).ready(function () {
  $("ul.navbar-nav > li > a").click(
      function (e) {
          $("ul.navbar-nav > li").removeClass(
              "active");
          $("ul.navbar-nav > li > a").css(
              "color", "");

          $(this).addClass("active");
          $(this).css("color", "#FF6000");
      });
});

function plusSlides(button, offset) {
  let innerGallery = $(button).parent().parent();
  let bigImage = innerGallery.find(".big-image .image");
  let images = bigImage.find("img");
  let nImage = images.length;
  let activedImage = images.filter(function(){
      return $(this).css("display") == "block";
  })
  var currentIndex = images.index(activedImage);
  currentIndex += offset;
  if (currentIndex >= nImage)
      currentIndex = 0;
  setImageGalleryIndex(innerGallery, currentIndex);
}

function setImageGalleryIndex(innerGallery, index){
  let bigImage = innerGallery.find(".big-image .image");
  let images = bigImage.find("img").css("display", "none");
  images.eq(index).css("display", "block")

  let thumbnailImages = innerGallery.find(".thumbnail img");
  thumbnailImages.removeClass("active");
  thumbnailImages.eq(index).addClass("active");

  let nImage = images.length;
  innerGallery.find(".numbertext").text(`${index + 1}/${nImage}`);
}

function showImage(image){
  image = $(image);
  if (image.hasClass("active"))
      return;
  let innerGallery = image.parent().parent();
  let index = innerGallery.find(".thumbnail img").index(image);
  console.log("index", index);
  setImageGalleryIndex(innerGallery, index);
}
