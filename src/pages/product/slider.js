const initSlider = ({
  sliderClassName,
  prevClassName,
  nextClassName,
  slideWidth,
  slidesGap,
}) => {
  const slider = {
    ref: null,
    prevRef: null,
    nextRef: null,
    currentPage: 0,
    slidesLength: 0,
  };

  slider.ref = document.querySelector(`.${sliderClassName}`);
  slider.prevRef = document.querySelector(`.${prevClassName}`);
  slider.nextRef = document.querySelector(`.${nextClassName}`);
  slider.slidesLength = Math.floor(slider.ref.offsetWidth / slideWidth);

  slider?.prevRef.addEventListener("click", () => {
    const currentPage = Math.floor(slider.ref.scrollLeft / slideWidth) - 1;
    slider.ref.scrollLeft = (currentPage < 0 ? 0 : currentPage) * slideWidth;
  });
  slider?.nextRef.addEventListener("click", () => {
    const currentPage = Math.floor(slider.ref.scrollLeft / slideWidth) + 1;
    slider.ref.scrollLeft = currentPage * (slideWidth + slidesGap);
  });
};

initSlider({
    sliderClassName: 'roadmap-slider',
    nextClassName: 'roadmap-slider__next-arrow',
    prevClassName: 'roadmap-slider__prev-arrow',
    slideWidth: 350,
    slidesGap: 18,
})