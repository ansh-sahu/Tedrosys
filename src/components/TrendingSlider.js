import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const TrendingSlider = (trendData) => {
  return (
    <div className="mt-5 mb-5 ">
      <div className="row d-flex justify-content-center ">
        <h3 class="service-type text-center" id="trend">Trending Category</h3>
        {trendData.trendData && trendData.trendData?.length ? (
          <div className="col-12 px-5">
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
              {trendData.trendData.map((ele, index) => (
                <SwiperSlide style={{ marginRigth: '32px !important' }}>
                  <div key={index} className="swiper-slide card">
                    <div className="card-content ">
                      <div className="image d-flex justify-content-center ">
                        <img
                          className="w-50 rounded-circle "
                          style={{ border: "solid 2px #03C7C6" }}
                          src={`${process.env.REACT_APP_URL}/${ele?.Logo}`}
                          alt
                        />
                      </div>
                      <div className="name-profession">
                        <span className="name">{ele.Category
                        }</span>
                      </div>

                    </div>
                  </div>

                </SwiperSlide>
              ))}
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </Swiper>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default TrendingSlider