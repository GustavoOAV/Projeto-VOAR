import styles from './Carrosel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  { id: '1', imagem: '/images/c1.png' },
  { id: '2', imagem: '/images/c2.png' },
  { id: '3', imagem: '/images/c3.png' }
];

function Carrosel() {
  return (
    <div id='Carrosel' className={styles.container}>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  loop={true}
   autoplay={{
    delay: 7000,
    disableOnInteraction: false
  }}
  onTouchStart={(swiper) => swiper.autoplay.stop()}
  onTouchEnd={(swiper) => swiper.autoplay.start()}
  className={styles['swiper-container']}
>
  {data.map((item) => (
    <SwiperSlide key={item.id} className={styles['swiper-slide']}>
      <img 
        src={process.env.PUBLIC_URL + item.imagem}
        alt={`Slide ${item.id}`}
      />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
}

export default Carrosel;