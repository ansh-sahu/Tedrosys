import React from "react";
import { useEffect, useState } from "react";
import "./Css/Category.css";
import arrow from "./img/icons/left arow.png";
import sub1 from "./img/Category/subcategory 1.png";
import sub2 from "./img/icons/Arrow - Right Circle.png";
import dsm from "./img/Category/dsm.png";
import locationIcon from "./img/icons/location.png";
import map from "./img/icons/map.png";
import subcat2 from "./img/Category/sub category 2.png";
import circle from "./img/icons/Arrow - Right Circle.png";
import axios from "axios";
import styled from "styled-components";
import { useHomeContext } from "./Context/homeContext";
import { NavLink } from "react-router-dom";
import { useCategoryContext } from "./Context/CategoryContext";
import noRecord from "./img/List of category/no record ffound.png";
import { useLocationContext } from "./Context/LocatorContext";

const Category = () => {
  const { location } = useLocationContext();

  const lat = location.lat;
  const lng = location.lng;
  console.log(location, "in categorey", lat, lng);
  const homeData = useHomeContext();
  const category = homeData.categories;
  // console.log(category, "adada");
  const { categoryId, getCategoryId } = useCategoryContext();
  // console.log(categoryId, "categoryid");
  useEffect(() => {
    if (category.length && !categoryId) getCategoryId(category[0]._id);
  }, [category]);

  const [SubCategory, SetSubCategory] = useState([]);
  // const [isId , setaIsId]=useState('')
  // SubCategory.map((value, index)=>{
  //   return setaIsId(value?._id);
  // })
  const fetchData = (categoryId) => {
    // console.log(categoryId, "shshsh");
    fetch(
      `${process.env.REACT_APP_URL}/category/get-category-by-parent/${categoryId}`
    )
      .then((res) => res.json())
      .then((result) => SetSubCategory(result.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    if (categoryId) fetchData(categoryId);
  }, [categoryId]);

  const [Shops, SetShops] = useState("");
  const [block,setblock]  = useState('');
  const [ShopsData, setShopsData] = useState([]);
  const shopData = (Shops) => {
    console.log(Shops, "shops");
    fetch(
      `${process.env.REACT_APP_URL}/sellerShopbycategoryId/${Shops}/23.2487/77.4066?lang=en`
    )
      .then((res) => res.json())
      .then((result) => setShopsData(result.shop, "hsgs"))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    if (Shops) {
      shopData(Shops);
    }
  }, [Shops]);

  console.log(ShopsData, "shopaya");
  console.log(SubCategory, "subData");
  console.log(block,'index')

  return (
    <Wrapper>
      <section className="categorys">
        <div className="container text-center">
          <h3 className="service-type ">Category</h3>
          <div className="row">
            <div className="col-sm-3">
              <div className="categorys-list" id="category">
                {category.length
                  ? category.map((value, index) => (
                      <div
                        className={`table ${
                          categoryId === value._id && "active"
                        }`}
                        key={index}
                        onClick={() => {
                          getCategoryId(value._id);
                          setShopsData([])
                        }}
                      >
                        <img
                          className="logo td"
                          src={`${process.env.REACT_APP_URL}/${value?.Logo}`}
                          alt="category-logo"
                        />
                        {/* {console.log('vqkjhfd' , value)} */}
                        <span className="tr text">
                          <a className="aaa">{value.Category}</a>
                        </span>
                      </div>
                    ))
                  : "No Category Found"}
              </div>
            </div>
            <div className="col-sm-9">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <img src={arrow} id="arrow" alt />
                <div className="submenu">
                  <h4>Companies Factories &amp; Industries Parent</h4>
                  <div className="line" />
                  <div className="scrol">
                    {SubCategory.length ? (
                      SubCategory.map((value, index) => (
                        <>
                          {/* {console.log(value, "shsh")} */}
                          {/* {setaIsId(value.?_id)} */}
                          <div key={index}>
                            <div
                              className="record"
                              onClick={() => {
                                SetShops(value._id);
                                setblock(index)
                                
                              }}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <img
                                src={`${process.env.REACT_APP_URL}/${value?.Logo}`}
                                alt
                              />
                              {/* {console.log(value._id)} */}
                              <span> {value.Category}</span>
                              <div
                                className="view-all"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src={sub2} alt />
                                <a
                                  href="Veiw all.html"
                                  style={{
                                    fontSize: 12,
                                    textDecoration: "none",
                                  }}
                                >
                                  view all
                                </a>
                              </div>
                            </div>
                          

                            {ShopsData.length && block===index 
                              ? ShopsData.map((value, indexs) => (
                                  <>
                               
                                    <div className="box" key={indexs}>
                                        <div
                                          className="card dcard"
                                          id="boxcard"
                                          style={{ width: "14rem" }}
                                        >
                                          <a href="Shop details.html">
                                            <img
                                              src={`${process.env.REACT_APP_URL}/${value?.shopBanner[2]}`}
                                              className="card-img-top dcard1"
                                              alt="..."
                                              style={{
                                                height: "18vh",
                                                width: "100%",
                                              }}
                                            />
                                          </a>
                                          <div className="card-body">
                                            <div className="card-details">
                                              <h5 className="card-title">
                                                DSM Online
                                              </h5>
                                              <div className="rating">
                                                <span>
                                                  {" "}
                                                  <i className="fa-solid fa-star" />{" "}
                                                  {value.Review[0]?.Rating}
                                                </span>
                                              </div>
                                            </div>
                                            <div className="location">
                                              <div className="location-details">
                                                <img src={locationIcon} alt />
                                                <p>
                                                  {value.shopAddress.slice(
                                                    0,
                                                    55
                                                  )}{" "}
                                                </p>
                                              </div>
                                              <div className="location-details">
                                                <div
                                                  className
                                                  style={{
                                                    width: "37%",
                                                    display: "flex",
                                                    justifyContent:
                                                      "space-between",
                                                  }}
                                                >
                                                  <img src={map} alt />
                                                  <p>BHOPAL</p>
                                                </div>
                                                <div className>
                                                  <span>{value.distance}</span>
                                                </div>
                                              </div>
                                            </div>
                                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                            <div className="call">
                                              <a href="tel:6207486864">
                                                <button>Call Now</button>
                                              </a>
                                              {/* Enquiry Form */}
                                              <div
                                                className="modal fade"
                                                id="exampleModalToggle"
                                                aria-hidden="true"
                                                aria-labelledby="exampleModalToggleLabel"
                                                tabIndex={-1}
                                              >
                                                <div className="modal-dialog modal-dialog-centered">
                                                  <div className="modal-content">
                                                    <div className="modal-header">
                                                      <h5
                                                        className="modal-title"
                                                        id="exampleModalToggleLabel"
                                                      >
                                                        Enquiry Form
                                                      </h5>
                                                      <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                        style={{
                                                          width: "2vh",
                                                          height: 10,
                                                        }}
                                                      />
                                                    </div>
                                                    <div
                                                      className
                                                      style={{
                                                        display: "flex",
                                                        justifyContent:
                                                          "space-between",
                                                        alignItems: "center",
                                                        flexDirection: "column",
                                                      }}
                                                    >
                                                      <div
                                                        className="input-tag"
                                                        style={{ width: "80%" }}
                                                      >
                                                        <h6
                                                          style={{
                                                            display: "flex",
                                                            paddingTop: 10,
                                                          }}
                                                        >
                                                          Name<span>*</span>
                                                        </h6>
                                                        <input
                                                          type="text"
                                                          placeholder="Enter Name"
                                                          required
                                                          style={{
                                                            width: "100%",
                                                            borderRadius: 5,
                                                            padding: 5,
                                                            border:
                                                              "1px solid rgb(190, 190, 190)",
                                                          }}
                                                        />
                                                      </div>
                                                      <div
                                                        className="input-tag"
                                                        style={{ width: "80%" }}
                                                      >
                                                        <h6
                                                          style={{
                                                            display: "flex",
                                                            paddingTop: 10,
                                                          }}
                                                        >
                                                          Contact No.
                                                          <span>*</span>
                                                        </h6>
                                                        <input
                                                          type="number"
                                                          placeholder="Enter Mobile Number"
                                                          required
                                                          style={{
                                                            width: "100%",
                                                            borderRadius: 5,
                                                            padding: 5,
                                                            border:
                                                              "1px solid rgb(190, 190, 190)",
                                                          }}
                                                        />
                                                      </div>
                                                      <div
                                                        className="input-tag"
                                                        style={{ width: "80%" }}
                                                      >
                                                        <h6
                                                          style={{
                                                            display: "flex",
                                                            paddingTop: 10,
                                                          }}
                                                        >
                                                          Email I'd
                                                          <span>*</span>
                                                        </h6>
                                                        <input
                                                          type="email"
                                                          placeholder="user123@gmail.com"
                                                          required
                                                          style={{
                                                            width: "100%",
                                                            borderRadius: 5,
                                                            padding: 5,
                                                            border:
                                                              "1px solid rgb(190, 190, 190)",
                                                          }}
                                                        />
                                                      </div>
                                                      <div
                                                        className="input-tag"
                                                        style={{ width: "80%" }}
                                                      >
                                                        <h6
                                                          style={{
                                                            display: "flex",
                                                            paddingTop: 10,
                                                          }}
                                                        >
                                                          Message<span>*</span>
                                                        </h6>
                                                        <textarea
                                                          id="textarea rows=2 "
                                                          placeholder="How can i help you?"
                                                          required
                                                          style={{
                                                            height: "auto",
                                                            width: "100%",
                                                            borderRadius: 5,
                                                            padding: 5,
                                                            border:
                                                              "1px solid rgb(190, 190, 190)",
                                                          }}
                                                          defaultValue={""}
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                      <button
                                                        className="btn btn-primary"
                                                        type="submit"
                                                        data-bs-target="#exampleModalToggle2"
                                                        data-bs-toggle="modal"
                                                        data-bs-dismiss="modal"
                                                        style={{
                                                          display: "flex",
                                                          alignItems: "center",
                                                          justifyContent:
                                                            "center !important",
                                                        }}
                                                      >
                                                        SUBMIT
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              {/* End Enquiry Form */}
                                              <a
                                                className="btn btn-primary btns"
                                                data-bs-toggle="modal"
                                                href="#exampleModalToggle"
                                                role="button"
                                                style={{
                                                  width: "15vh",
                                                  height: 30,
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  backgroundColor: "#03C7C6",
                                                  color: "#fff",
                                                  border: "#fff",
                                                  borderRadius: 8,
                                                  fontSize: 13,
                                                  fontWeight: 600,
                                                }}
                                              >
                                                Enquiry
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                            
                                      
                                    
                                  </>
                                ))
                              : null}
                          </div>
                        </>
                      ))
                    ) : (
                      <div className="records">
                        <img className="noFoun" src={noRecord} alt />
                      </div>
                    )}
                  </div>

                  {/* <div className="record">
                    <img src={subcat2} alt />
                    <span>SubCategory 2</span>
                    <div className="view-all">
                      <img src={circle} className="down" alt />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .records img {
    width: 84% !important;
  }

  .categorys {
    padding-top: 10px;
    background-color: #f8f9fa;
    padding-bottom: 18px;
  }
  .scrol {
    height: 68vh;
    overflow-y: scroll;
    padding-bottom: 2px;
  }

  .aaa {
    color: black;
    cursor: pointer;
  }
  .categorys .col-sm-3 {
    width: 25%;
  }
  .container {
    max-width: 95%;
  }
  .categorys-list {
    border: 1px solid rgba(232, 232, 232, 1);
    width: 100%;
    height: 75vh;
    background-color: #ffffff;
    padding-top: 12px;
    border-radius: 5px 20px 20px 5px;
    overflow-y: scroll;
  }
  .categorys img {
    width: 40px;
  }
  .table {
    width: 100%;
    font-size: 18px;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    padding: 7px;
  }
  .active {
    background-color: #03c7c6;
    border-radius: 10px;
  }
  .table img {
    padding-left: 10px;
  }
  .table .tr {
    padding-left: 30px;
    color: black;
    text-decoration: none;
  }

  .service-type {
    color: #03c7c6;
    font-weight: 500;
    text-align: left;
  }
  .categorys .col-sm-9 {
    width: 65%;
  }

  /* submenu section */
  .submenu {
    width: 96%;
    height: 80vh;
    background: #fff;
    /* border: 1PX solid #B7B7B7; */
    border-radius: 20px;

    border-radius: 20px;
  }
  .submenu h4 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 24px;
    padding-top: 10px;
    color: #03c7c6;
  }
  .submenu .line {
    width: 100%;
    height: 1px;
    background-color: #a6a6a626;
    border-radius: 5px;
  }
  .submenu .record img {
    height: 30px;
    width: 30px;
  }
  .row-cols-md-2 #arrow {
    width: 20px;
    height: 20px;
    padding: 0px;
  }
  #arrow {
    margin-top: 7vh;
  }

  .record {
    width: 90%;
    border-radius: 10px;
    height: 50px;
    border: 1px solid#D3D3D3;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    background-color: #eaeaea;
    padding: 12px;
    margin-top: 12px;
  }
  .down {
    transform: rotate(180deg);
  }
  #boxcard {
    background: none;
    height: 40vh;
    background-color: rgba(3, 199, 198, 0.22);
  }
  .desktop .dcard1 {
    box-shadow: none;
  }
  .desktop .btns {
    position: relative;
    top: none;
    left: 2%;
  }
  .box {
    width: 90%;
    border-radius: 10px;
    height: 45vh;
    border: 1px solid#D3D3D3;

    margin-top: 2px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card-body {
    padding: 5px 10px 5px 10px;
  }
  .card-title {
    font-size: 16px;
    font-weight: 600;
    float: left;
  }
  .card-details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 10px;
  }
  .card-details .ratings {
    background-color: #03c7c6;
    border: 1px solid #fff;
    color: #fff;
    font-size: 12px;
    width: 46px;
    height: 20px;
    font-weight: 600;
    border-radius: 5px;
  }
  .card-details .ratings i {
    color: #ffff92;
  }
  .location-details {
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    height: 4vh;
    color: #000;
    font-weight: 600;
    width: 100%;
  }
  .card-body .call {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
  .card-body .call button {
    width: 15vh;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #03c7c6;
    color: #fff;
    border: #fff;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
  }
  .view-all a:hover {
    color: green;
  }
  .view-all img:hover {
    transform: rotate(90deg);
    transition: 2.2s ease;
    /* transition-delay: 1s; */
    cursor: pointer;
  }
`;
export default Category;
