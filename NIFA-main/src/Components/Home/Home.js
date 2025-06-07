import React from 'react';
import './Home.css';

import { Navigation,Autoplay, Pagination, Scrollbar,A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Img1 from '../images/banner1.jpg';
import  Img2 from '../images/1273170038home-banner2.jpg'
import  Img3 from '../images/1922909411home-banner3.jpg'
import  Img4 from '../images/1858311846home-banner4.jpg'
import  Img5 from '../images/1952342548home-banner5.jpg'


const Home = () => {
  return (
    <div>
        <div className="main-container">
          <div className="swiper">
         <Swiper
             modules={[Navigation, Autoplay,Scrollbar, A11y ,]}
             navigation
             autoplay={{autoplay:true}}
            //  scrollbar={{ draggable: true }}
             loop={true}
             >
            <SwiperSlide>
                <img src={Img1} alt=""/>
            </SwiperSlide>
            <SwiperSlide >
                <img src={Img2} alt="" />
            </SwiperSlide>
            <SwiperSlide >
                <img src={Img3} alt="" />
            </SwiperSlide>
            <SwiperSlide >
                <img src={Img4} alt=""/>
            </SwiperSlide>
            <SwiperSlide >
                <img src={Img5} alt=""/>
            </SwiperSlide>
    </Swiper>
          </div>
          <div className="marquee">
            <h2>Nifa Updates::</h2>
            <marquee behavior="scroll" direction="left" duration="2"
            >All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please download the NIFA app from our online classes page to register for a complimentary trial class.</marquee>
          </div>
          <div className="read-more">
            <h1>Welcome To National Institute of Fine Arts</h1>
            <p>
            National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. National Institute of Fine Arts  (NIFA) was established by MRS RENU KHERA in Delhi and NCR of Delhi on July 2005. Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education and training to students on a wide spectrum of Fine Arts.
            </p>
            <p>
            National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes. We seek to shape the global future of arts with an emphasis on excellence that allows its members to reach for the highest artistic standards as individuals while recognizing that the Art is one of the foundations of a healthy and creative society. This is a place where national and international leaders in the arts gather, teach, show and perform their work. The institute prides itself on its openness and on creating an environment that is safe, welcoming, and built on mutual respect.
            </p>
            <h1 className='national'>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes.</h1>
            <button type="button">Read More</button>
          </div>
        </div>
    </div>
  )
}

export default Home;
