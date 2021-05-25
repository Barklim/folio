console.log('%c ', 'font-size:600px; line-height:280px; background:url(https://i.postimg.cc/8kHZmvy3/nof2u4-Xbn-RU-removebg-preview.png) no-repeat;');

// 1192  x  753
// 2562  x  1329
// 502  x  813 
// 460 x 996 for swiper (920 x 1992)
const aptekamosTemp1 = '<div class="swiper-slide"><img class="slideImg" src="assets/img/aptekamos/aptekamos1.webp"/></div>';
const aptekamosTemp2 = '<div class="swiper-slide"><img class="slideImg" src="assets/img/aptekamos/aptekamos2.webp"/></div>';
const aptekamosTemp3 = '<div class="swiper-slide"><img class="slideImg" src="assets/img/aptekamos/aptekamos3.webp"/></div>';
const aptekamosTemp4 = '<div class="swiper-slide"><img class="slideImg" src="assets/img/aptekamos/aptekamos4.webp"/></div>';

const atwintaTemp_lg = '<div class="swiper-slide"><img class="slideImg" src="assets/img/atwinta/atwintalg.webp"/></div>';
const atwintaTemp_sm = '<div class="swiper-slide"><img class="slideImg" src="assets/img/atwinta/atwintasm.webp"/></div>';
const atwintaTempMoblie_sm = '<div class="swiper-slide"><img class="slideImg" src="assets/img/atwinta/atwintasmSw.webp"/></div>';

const atwintaTemp_lg2 = '<div class="swiper-slide"><img class="slideImg" src="assets/img/atwinta/atwintalg2.webp"/></div>';
const atwintaTemp_md2 = '<div class="swiper-slide"><img class="slideImg" src="assets/img/atwinta/atwintamd2.webp"/></div>';
const atwintaTemp_sm2 = '<div class="swiper-slide"><img class="slideImg" src="assets/img/atwinta/atwintasm2.webp"/></div>';
const atwintaTempMoblie_sm2 = '<div class="swiper-slide"><img class="slideImg" src="assets/img/atwinta/atwintasm2.webp"/></div>';

const aptekamosArr = [aptekamosTemp1, aptekamosTemp2, aptekamosTemp3, aptekamosTemp4];
const atwintaArr1 = [atwintaTemp_lg, atwintaTemp_sm];
const atwintaMobileArr1 = [atwintaTempMoblie_sm];
const atwintaArr2 = [atwintaTemp_lg2, atwintaTemp_md2, atwintaTemp_sm2];
const atwintaMobileArr2 = [atwintaTempMoblie_sm2, atwintaTemp_sm2];

const swiperHeight = document.documentElement.clientHeight - 320;
let slidesPerViewVar = 1;
const perView = document.documentElement.clientWidth;
if (perView < 800) {
	slidesPerViewVar = 1;
} else if (perView > 1100) {
	slidesPerViewVar = 3;
} else {
	slidesPerViewVar = 2;
}

let swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: slidesPerViewVar,
  spaceBetween: 30,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpointsBase: 'window',
});

let swiper1 = new Swiper('.swiper-container1', {
  direction: 'horizontal',
  slidesPerView: 1,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpointsBase: 'window',
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});

// Modal Section
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
// swiper need the display none for work
modal.style.display = "none";
modal1.style.display = "none";

var scrAptekamos = document.getElementById("screenshots-aptekamos");
var scrAtwinta = document.getElementById("screenshots-atwinta");
var scrAtwinta2 = document.getElementById("screenshots-atwinta2");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];

scrAptekamos.onclick = function() {
  aptekamosArr.forEach(function(item, i, arr) {
    swiper.appendSlide(item);
  });

  modal.style.display = "block";
}
scrAtwinta.onclick = function() {
  swiper1.removeAllSlides();

  // isMobile?
  if (slidesPerViewVar === 1)
  {
    atwintaMobileArr1.forEach(function(item, i, arr) {
      swiper1.appendSlide(item);
    });
  } else {
    atwintaArr1.forEach(function(item, i, arr) {
      swiper1.appendSlide(item);
    });
  }

  modal1.style.display = "block";
}
scrAtwinta2.onclick = function() {
  swiper1.removeAllSlides();

  // isMobile?
  if (slidesPerViewVar === 1)
  {
    atwintaMobileArr2.forEach(function(item, i, arr) {
      swiper1.appendSlide(item);
    });
  } else {
    atwintaArr2.forEach(function(item, i, arr) {
      swiper1.appendSlide(item);
    });
  }

  modal1.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal1.style.display = "none";
  }
}