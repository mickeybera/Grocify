import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from "axios";
import { Link } from 'react-router-dom';

function Seemore() {
  const [veg,setVeg]=useState([])
  useEffect(()=>{
const getVeg=async()=>{
  try {
    const res=await axios.get("http://localhost:4001/veg");
    console.log(res.data);
    setVeg(res.data);
  } catch (error) {
    console.log(error);
  }
}
getVeg();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <Link to="/">
        <div className="mt-5">
        <button className="bg-green-600 text-white rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base hover:bg-green-800 duration-300">back</button>
        </div>
        </Link>
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">We think for your helth <span className="text-green-600">:)</span></h1>
          <p className="mt-10">Eating vegetables is essential for maintaining optimal health and well-being. Rich in essential vitamins, minerals, and antioxidants, vegetables help boost the immune system, improve digestion, and reduce the risk of chronic diseases such as heart disease, diabetes, and cancer. Their high fiber content aids in maintaining a healthy weight by promoting a feeling of fullness and supporting gut health. Moreover, the diverse range of nutrients found in vegetables contributes to better skin health, increased energy levels, and overall vitality. Incorporating a variety of colorful vegetables into your diet ensures you receive a broad spectrum of nutrients necessary for a balanced and nutritious lifestyle.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
             veg.map((item)=>(
              <Cards key={item.id} item={item}/>
             ))
          }
        </div>
      </div>
    </>
  )
}

export default Seemore
