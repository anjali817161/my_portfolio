import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import JavaCertificate from '../Images/JavaCertificate.jpg.jpeg';
import DSACertificate from '../Images/DSACertificate.jpg.jpeg';
import FrontendCertificate from '../Images/FrontendCertificate.jpg.jpeg';
import ReactCertificate from '../Images/ReactCertificate.jpg.jpeg';
import BackendCertificate from '../Images/BackendCertificate.jpg.jpeg';
import GenerativeAI_Certificate from '../Images/GenerativeAI_Certificate.jpg.jpeg';

const certifications = [
  { id: 1, title: "Java Certificate", link: "https://drive.google.com/file/d/1xbVxl5jsmHVJmxdK3yci2_0GpTRj4dGy/view?usp=sharing", img: JavaCertificate },
  { id: 2, title: "DSA Certificate", link: "https://drive.google.com/file/d/14tRcgbeE21Q4i9xWIwc1hwUKAoNHmGaB/view?usp=sharing", img: DSACertificate },
  { id: 3, title: "Frontend Certificate", link: "https://drive.google.com/file/d/1gncpKt0b9wQt3KK02KIz-9rAcT0xnj_C/view?usp=sharing", img: FrontendCertificate },
  { id: 4, title: "React Certificate", link: "https://drive.google.com/file/d/1ITCcZ8hxhZIGHOQW7lyy8AEc7sCHLsOy/view?usp=sharing", img: ReactCertificate },
  { id: 5, title: "Backend Certificate", link: "https://drive.google.com/file/d/1gbtEy2m29MmSoEgtrxCWC8jywGmda9fA/view?usp=sharing", img: BackendCertificate },
  { id: 6, title: "Generative AI Certificate", link: "https://drive.google.com/file/d/1nP4NIssB-AxmQxZXOJDz8V2u-cBT0XJq/view?usp=sharing", img: GenerativeAI_Certificate },
];

const Certifications = () => {
  return (
    <section className="p-10 bg-gradient-to-t from-zinc-300 to-slate-200">
      <h2 className="text-5xl text-cyan-900 font-serif text-center underline">Certifications</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3} // Default number of slides per view
        navigation
        pagination={{ clickable: true }} 
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2, // 2 slides for small tablets
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3, // 3 slides for larger tablets and desktops
            spaceBetween: 30,
          },
          // when window width is < 640px
          0: {
            slidesPerView: 1, // 1 slide for mobile
          },
        }}
        className="mySwiper mt-16 px-8 py-8"
      >
        {certifications.map(cert => (
          <SwiperSlide key={cert.id}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <div className="border rounded-xl bg-black hover:shadow-2xl overflow-hidden shadow-xl transition-transform transform hover:scale-105 p-4">
                <img src={cert.img} alt={cert.title} className="w-full h-full object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-white text-lg">{cert.title}</h3>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certifications;
