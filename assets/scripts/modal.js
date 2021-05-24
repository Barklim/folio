console.log('%c ', 'font-size:600px; line-height:280px; background:url(https://i.postimg.cc/8kHZmvy3/nof2u4-Xbn-RU-removebg-preview.png) no-repeat;');

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
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});







const aptekamosTemp = "<div class=\"swiper-slide\">\n\t\t\t\t\t\t <img class=\"slideImg\" src=\"assets/img/aptekamos/aptekamos1.webp\"/>\n\t\t\t\t\t\t\t    </div>"









// Modal Section
var modal = document.getElementById("myModal");
// swiper need the display none for work
modal.style.display = "none";

var scrAptekamos = document.getElementById("screenshots-aptekamos");
var scrAtwinta = document.getElementById("screenshots-atwinta");

var span = document.getElementsByClassName("close")[0];

scrAptekamos.onclick = function() {
  modal.style.display = "block";
}
scrAtwinta.onclick = function() {
  // console.log('---------- TESTE ----------')
  // console.log(swiper)
  // console.log(swiper.slidesPerView)

  // swiper.appendSlide('<div class="swiper-slide">Slide 10"</div>');
  // swiper.appendSlide(aptekamosTemp);
  // swiper.removeAllSlides()

  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}