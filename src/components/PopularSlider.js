import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const PopularSlider = ({ allBrands }) => {
  // console.log(popular)
  return (
    <section>
      <div className="">
        <div className="row d-flex justify-content-center ">
          <h3 class="service-type text-center" id="trend">All brands</h3>
          {allBrands && allBrands?.length ? (
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
                {allBrands.map((ele, index) => (
                  <SwiperSlide key={index} style={{ marginRigth: '32px !important' }}>
                    <div className="col-4 mb-4">
                      <div className="card h-100 dcard">
                        <img src={`${process.env.REACT_APP_URL}/${ele?.shop?.shopBanner?.at(0)}`} className="card-img-top" alt={ele?.shop?.shopName || 'Shop Banner'} />
                        <div className="card-body">
                          <h5 className="card-title"><a href="Shop&store.html" style={{ color: 'black' }}>{ele?.shop?.shopName || 'N/A'}</a></h5>
                        </div>
                      </div>
                    </div>

                  </SwiperSlide>
                ))}
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
              </Swiper>

            </div>) : null}
        </div>
      </div>
    </section>
  )
}

export default PopularSlider;
