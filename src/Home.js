import React, { useState, useEffect } from "react";
import jhumr from "./img/Jhumar/jhumar.png";

import PopularSection from "./components/PopularSection";
import Slider from "./components/Slider";

import styled from "styled-components";
import Loader from "./components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { HomeProvider, useHomeContext } from "./Context/homeContext";
import TrendingSlider from "./components/TrendingSlider";
import { useCategoryContext } from "./Context/CategoryContext";
import { NavLink } from "react-router-dom";
import GeoLocator from "./components/GeoLocator";
import { useLocationContext } from "./Context/LocatorContext";
import { useLanguageContext } from "./Context/languageContext";
import PopularSlider from "./components/PopularSlider";

const Home = () => {
  const homeData = useHomeContext();
  const { location } = useLocationContext();
  console.log(location);
  const { getLanguage } = useLanguageContext();
 

  const [modifiedService, setModifiedService] = useState([]);
  const { getCategoryId } = useCategoryContext();
  // console.log(homeData,"kjkdsfkj");
  let temp = [];
  let emptytemp = false;
   
   
  useEffect(() => {
    
    if (homeData?.serviceType?.length) {
      setModifiedService(
        homeData?.serviceType?.reduce((original, ele, index) => {
          if (emptytemp) {
            temp = [];
            emptytemp = false;
          }
          temp = [...temp, ele];
          // console.log(temp, "temp");
          if (
            (homeData?.serviceType.length > index + 1 &&
              (index + 1) % 2 === 0) ||
            homeData?.serviceType.length === index + 1
          ) {
            emptytemp = true;
            return [...original, temp];
          }
          return original;
        }, [])
      );
    }
  }, [homeData?.serviceType]);

  // console.log(modifiedService);

  return homeData?.isLoading ? (
    <Loader />
  ) : (
    <div className="desktop">
      {/* jhumar section */}
      <div className="jhumar">
        <img src={jhumr} className="jhum1" alt="jhumr" />
        <img src={jhumr} className="jhum" alt="jhumr" />
      </div>
      {/* Banner slider section  */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {homeData?.banners && homeData?.banners?.length ? ( 
          <div className="carousel-inner">
            {homeData.banners.map((ele, index) => (
              <div key={index} className="carousel-item active">
                <img
                  src={`${process.env.REACT_APP_URL}/${ele?.photo}`}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            ))}
            {/* <div className="carousel-item">
              <img src={Banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner3} className="d-block w-100" alt="..." />
            </div> */}
          </div>
          
        ) : null}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* ksjkdsf */}
      <section className="category">
        <div className="container text-center">
          <div className="row" style={{ height: "90vh" }}>
            <div className="col-sm-3">
              <h3 className="service-type ">Category</h3>
              {homeData?.banners && homeData?.banners?.length ? (
                <div className="category-list">
                  {homeData.categories.map((ele, index) => (
                    <NavLink to="/category" key={index}>
                      <div
                        className="list"
                        onClick={() => {
                          getCategoryId(ele._id);
                        }}
                      >
                        <img
                          src={`${process.env.REACT_APP_URL}/${ele?.Logo}`}
                          alt
                        />
                        <a href="Company.html">{ele?.Category}</a>
                      </div>
                      <hr />
                    </NavLink>
                  ))}
                </div>
              ) : null}
              {/* Level 1: .col-sm-3 */}
            </div>
            <div className="col-sm-9">
              {/* service-type section */}
              <h3 className="service-type">Service Type</h3>
              {homeData?.serviceType && homeData?.serviceType?.length ? (
                <div className="row row-cols-1 row-cols-md-2 g-4 directionCng">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    onSlideChange={() => console.log("")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {modifiedService.map((ele, index) => (
                      <SwiperSlide className="slider_crd">
                        <div key={index} className="col">
                          <div>
                            {ele.map((elem, index) => (
                              <div key={index} className="card catcard">
                                <img
                                  src={`${process.env.REACT_APP_URL}/${elem?.image}`}
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {" "}
                                    <a
                                      href="Company.html"
                                      style={{ color: "black" }}
                                    >
                                      {elem?.name}
                                    </a>{" "}
                                  </h5>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* <Slider Data={homeData.homevideo} /> */}
      <TrendingSlider trendData={homeData.trendingCategory} />
      <PopularSlider allBrands ={homeData.allBrands} popular={homeData.popularCategory}/>
      <PopularSection popular={homeData.popularCategory} />
      
        {/* <MapComp/> */}
      <div className="container mt-5 mb-5">
        <div className="row">
          {homeData?.homevideo && homeData?.homevideo?.length ? (
            <div className="col">
              {homeData.homevideo.map((ele, index) => (
                <div style={{ height: "30vh", width: "100%" }}>
                  {/* <iframe key={index} src={`${process.env.REACT_APP_URL}/${ele?.video}`} frameborder="0" width='100%' height='100%' ></iframe> */}
                  <video
                    width="100%"
                    height="240"
                    controls
                    poster={`${process.env.REACT_APP_URL}/${ele?.thumbNail}`}
                  >
                    <source
                      src={`${process.env.REACT_APP_URL}/${ele?.video}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
