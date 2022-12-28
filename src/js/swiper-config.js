function swiperSlider() {
  const swiperSliders = document.querySelectorAll('[data-slider="content"]');
  const heroSliders = document.querySelectorAll('[data-slider="hero"]');
  const detailsSliders = document.querySelectorAll('[data-slider="details"]');
  const detailsSlidersNew = document.querySelectorAll(
    '[data-slider="details-new"]'
  );
  if (swiperSliders) {
    swiperSliders.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
      const swiper = new Swiper(slider.querySelector('.swiper-content'), {
        slidesPerView: 1.3,
        //initialSlide: 4,
        //   spaceBetween: 16,
        // centeredSlides: true,
        //freeMode: true,
        loop: true,
        resizeObserver: true,
        cubeEffect: {
          slideShadows: true,
        },
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        breakpoints: {
          //   when window width is >= 320px
          320: {
            // centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 12,
          },
          //   when window width is >= 414px
          414: {
            slidesPerView: 1.325,
            spaceBetween: 16,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }
  //
  if (heroSliders) {
    heroSliders.forEach(slider => {
      const swiper = new Swiper(slider.querySelector('.swiper-hero'), {
        loop: true,
        loopSlides: 3,
        // slidesPerView: auto,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-hero-button-next',
          prevEl: '.swiper-hero-button-prev',
        },
      });
    });
  }
  //
  if (detailsSliders) {
    detailsSliders.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
      const swiper = new Swiper(slider.querySelector('.swiper-details'), {
        slidesPerView: 'auto',
        spaceBetween: 34,
        initialSlide: 2,
        loopSlides: 6,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        breakpoints: {
          320: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          414: {
            centeredSlides: false,
            slidesPerView: 1.325,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 34,
          },
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 34,
          },
        },
      });
    });
  }
  if (detailsSlidersNew) {
    detailsSlidersNew.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
      var swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        spaceBetween: 34,
        initialSlide: 2,
        loopSlides: 6,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        centeredSlides: true,
        roundLengths: true,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  }
}
window.addEventListener('load', swiperSlider);
