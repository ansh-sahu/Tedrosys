import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

 const Slider= (Data) => {
  console.log(Data,"fefiusfdjhjbh")
  return (
    <div className="container mt-5 mb-5 ">
        <div className="row d-flex justify-content-center ">
        <h3 class="service-type text-center" id="trend">Video's</h3>
        <div className="col-9">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
       
        <SwiperSlide>
          <div className="swiper-slide card">
            <div className="card-content ">
              <div className="image d-flex justify-content-center ">
                <img
                  className="w-50 rounded-circle "
                  style={{ border: "solid 2px #03C7C6" }}
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png"
                  alt
                />
              </div>
              <div className="name-profession">
                <span className="name">Andrew</span>
              </div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide card">
            <div className="card-content ">
              <div className="image d-flex justify-content-center ">
                <img
                  className="w-50 rounded-circle "
                  style={{ border: "solid 2px #03C7C6" }}
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png"
                  alt
                />
              </div>
              <div className="name-profession">
                <span className="name">Andrew</span>
              </div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide card">
            <div className="card-content ">
              <div className="image d-flex justify-content-center ">
                <img
                  className="w-50 rounded-circle "
                  style={{ border: "solid 2px #03C7C6" }}
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png"
                  alt
                />
              </div>
              <div className="name-profession">
                <span className="name">Andrew</span>
              </div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide card">
            <div className="card-content ">
              <div className="image d-flex justify-content-center ">
                <img
                  className="w-50 rounded-circle "
                  style={{ border: "solid 2px #03C7C6" }}
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png"
                  alt
                />
              </div>
              <div className="name-profession">
                <span className="name">Andrew</span>
              </div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide card">
            <div className="card-content ">
              <div className="image d-flex justify-content-center ">
                <img
                  className="w-50 rounded-circle "
                  style={{ border: "solid 2px #03C7C6" }}
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png"
                  alt
                />
              </div>
              <div className="name-profession">
                <span className="name">Andrew</span>
              </div>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
          </div>
        </SwiperSlide>
       
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </Swiper>
         </div>
      </div>
    </div>
  );
};
export default Slider