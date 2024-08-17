import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Lowveg() {

  const [veg,setVeg]=useState([])
  useEffect(()=>{
const getVeg=async()=>{
  try {
    const res=await axios.get("http://localhost:4001/veg");
    console.log(res.data);
    setVeg(res.data.filter((data)=>data.category==="Free"));
  } catch (error) {
    console.log(error);
  }
}
getVeg();
  },[])
    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
    <>
    <div className="">
      <div>
      <h1 className="font-semibold text-xl mt-5 mx-3">low fat vegis</h1>
      <p className="mx-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aut dolorum blanditiis fugiat porro, esse consequatur nam eligendi ad, eveniet explicabo hic mollitia commodi minus nihil molestiae perferendis tempore odio. Beatae velit enim optio!</p>
      </div>
    
    <div>
    <Slider {...settings}>
        {veg.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Lowveg;
