import React from 'react';
import popular from '../img/Popular service gif/Tvth.gif';
import popular1 from '../img/Popular service gif/biggest-Information-Technology-Firm.gif';
import popular2 from '../img/Popular service gif/safetynow_frame1-drib.gif';
import popular3 from '../img/Popular service gif/trans.gif';
import popular4 from '../img/Popular service gif/education.gif';
import popular5 from '../img/Popular service gif/future_of_tech_bloggif.gif';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const PopularSection = ({ popular }) => {
  return (
    <section className="popular">
      <div className="">
        <h3 className="service-type" id="trend">Popular Category</h3>
        {popular && popular?.length ? (
          <div className="row col-12 px-5" id="popular" >
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
              {popular.map((ele, index) => (
                <SwiperSlide key={index} style={{ marginRigth: '32px !important' }}>
                  <div className="col-4 mb-4">
                    <div className="card h-100 dcard">
                      <img src={`${process.env.REACT_APP_URL}/${ele?.Logo}`} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title"><a href="Shop&store.html" style={{ color: 'black' }}>{ele.Category
                        }</a></h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : null}
      </div>

    </section >

  )
}

export default PopularSection
