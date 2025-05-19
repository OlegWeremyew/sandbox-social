import { type FC, useRef } from 'react';
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';
import { Autoplay } from 'swiper/modules';
import styles from './SimpleSwiper.module.scss';

const slides: Readonly<number[]> = [1, 2, 3, 4, 5, 6, 7, 8];

export const SimpleSwiper: FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const progressBar = useRef<HTMLDivElement>(null);

  const slideToNext = (): void => {
    swiperRef.current!.swiper.slideNext();
    //console.log('swiperRef', swiperRef.current!.swiper);
  };

  const slideToPrev = (): void => {
    swiperRef.current!.swiper.slidePrev();
  };

  const goToSlideByLoopIndex = (index: number): void => {
    swiperRef.current!.swiper.slideToLoop(index);
  };

  const handleChangeSwiper = (_swiper: SwiperClass): void => {
    //console.log('swiper', _swiper);
  };

  const handleCreateSwiper = (_swiper: SwiperClass): void => {
    // console.log('swiper initialized', _swiper);
  };

  const handleTransitionStart = (_swiper: SwiperClass): void => {
    // console.log('transition started', _swiper);
  };

  const handleTransitionEnd = (_swiper: SwiperClass): void => {
    //console.log('transition started', _swiper);
  };

  // Достигли конца слайдера
  const handleReachEnd = (_swiper: SwiperClass): void => {
    //console.log('Reached last slide', _swiper);
  };

  // Изменение размера окна
  const handleResize = (_swiper: SwiperClass): void => {
    //console.log('Window resized, recalc slidesPerView if needed', _swiper);
  };

  const handleProgress = (_swiper: SwiperClass, progress: number) => {
    // swiper.activeIndex — текущий индекс
    // swiper.slides.length — общее число слайдов (включая дубли при loop)
    //console.log('swiper', _swiper);
    //console.log(`Progress: ${Math.round(progress * 100)}%`);
    if (progressBar.current) {
      progressBar.current.style.width = `${progress * 100}%`;
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        className={styles.slider}
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={handleChangeSwiper}
        onSwiper={handleCreateSwiper}
        onTransitionStart={(swiper) => handleTransitionStart(swiper as SwiperClass)}
        onTransitionEnd={handleTransitionEnd}
        onReachEnd={handleReachEnd}
        onResize={handleResize}
        onProgress={handleProgress}
      >
        {slides.map((el) => (
          <SwiperSlide key={el} className={styles.slide} onClick={() => goToSlideByLoopIndex(el)}>
            Slide {el}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.progressContainer}>
        <div ref={progressBar} className={styles.progressBar} />
      </div>

      <div className={styles.navButtons}>
        <button type="button" className={styles.navButton} onClick={() => goToSlideByLoopIndex(0)}>
          {`<<`}
        </button>
        <button type="button" className={styles.navButton} onClick={slideToPrev}>
          {`<`}
        </button>
        <button type="button" className={styles.navButton} onClick={slideToNext}>
          {`>`}
        </button>
        <button type="button" className={styles.navButton} onClick={() => goToSlideByLoopIndex(7)}>
          {`>>`}
        </button>
      </div>
    </>
  );
};
