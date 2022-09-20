// search
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('.search-input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// badge
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(
  function(){
    if(window.scrollY > 500) {
      gsap.to(badgeEl, .6, {
        opacity:0,
        display:'none'
      })
    } else {
      gsap.to(badgeEl, .6, {
        opacity:1,
        display:'block'
      })
    }
  }),3000);


  // visual img fade-in
  const fadeEls = document.querySelectorAll('.visual .fade-in');
  fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl,1,{
      delay: (index + 1) * .7,
      opacity:1
    });
  });


// swiper
const swiper = new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// toggle promotion
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle_promotion');
let ishidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  ishidePromotion = !ishidePromotion
  if(ishidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});


// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});




