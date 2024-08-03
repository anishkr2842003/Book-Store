import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {

  const[bookData,setBookData] = useState([]);

  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get('http://localhost:4001/book');
        setBookData(res.data);
      } catch (error) {
        console.log('Error : ',error)
      }
    }
    getBook();
  },[])

  const filterData = bookData.filter((book) => book.category === "Free");
  // console.log(filterData);

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-5">
        <div>
        <h1 className="font-semibold text-xl pb-2">Free Offred Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione
          obcaecati aliquid blanditiis libero deserunt consequuntur sunt
          nesciunt incidunt atque similique cumque dolorem omnis officiis nemo,
          quisquam a, temporibus optio.
        </p>
      </div>
        
      
        <div className="slider-container">
          <Slider {...settings}>
            {filterData.map((book,index)=> <Cards key={index} book={book}/>)}
          </Slider>
        </div>
      
      </div>
    </>
  );
}

export default Freebook;
