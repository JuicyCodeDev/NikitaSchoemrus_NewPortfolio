import Image from 'next/image'
import styles from '../styles/Gallery.module.css'
import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Mousewheel, Pagination, Navigation } from 'swiper';

const Gallery = () => {

  const [height, setHeight] = useState(null);

  useEffect(() => {
    setHeight(window.innerHeight);
  },[]);

  const conainerStyle = {
    height: `${height}px`,
  }

  return ( 
    <div style={conainerStyle}>
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet'
        }}
        mousewheel={true}
        modules={[Mousewheel, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className={styles.horizontal_painting}>
            <img className={styles.painting} src='/paintings/Karajan.png' alt='Painting of the conductor Karajan' />
          <div className={styles.paintingInfo}><span className={styles.paintingName}>Karajan&nbsp;</span> 190 x 160 cm&nbsp; 2016</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.vertical_painting}>
            <img className={styles.painting} src='/paintings/September.png' alt='Painting of the conductor Karajan' />
            <div className={styles.paintingInfo}><span className={styles.paintingName}>September&nbsp;</span> 100 x 70 cm&nbsp; 2019</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.horizontal_painting}>
            <img className={styles.painting} src='/paintings/Karajan.png' alt='Painting of the conductor Karajan' />
            <div className={styles.paintingInfo}><span className={styles.paintingName}>Karajan&nbsp;</span> 190 x 160 cm&nbsp; 2016</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
   );
}
 
export default Gallery;