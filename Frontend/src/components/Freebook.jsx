import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const bookData = [
    {
      id: 1,
      name: "Story",
      title: "A crow",
      price: 0,
      category: "Free",
      description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 2,
      name: "Food Book",
      title: "Delicious Food",
      price: 100,
      category: "Paid",
      description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 3,
      name: "Story",
      title: "World of Animal",
      description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      price: 0,
      category: "Free",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 4,
      name: "Story",
      title: "A king and There Castle",
      description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      price: 150,
      category: "Paid",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 5,
      name: "Story",
      title: "King of Atlantis",
      description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      price: 0,
      category: "Free",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 6,
      name: "Programming Book",
      title: "Learn Python",
      description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      price: 59,
      category: "Paid",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
        id: 1,
        name: "Story",
        title: "A crow",
        price: 0,
        category: "Free",
        description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
        image:
          "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
      },
      {
        id: 2,
        name: "Food Book",
        title: "Delicious Food",
        price: 100,
        category: "Paid",
        description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
        image:
          "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
      },
      {
        id: 3,
        name: "Story",
        title: "World of Animal",
        description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
        price: 0,
        category: "Free",
        image:
          "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
      },
      {
        id: 4,
        name: "Story",
        title: "A king and There Castle",
        description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
        price: 150,
        category: "Paid",
        image:
          "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
      },
      {
        id: 5,
        name: "Story",
        title: "King of Atlantis",
        description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
        price: 0,
        category: "Free",
        image:
          "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
      },
      {
        id: 6,
        name: "Programming Book",
        title: "Learn Python",
        description: "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
        price: 59,
        category: "Paid",
        image:
          "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
      },
  ];

  const filterData = bookData.filter((book) => book.category === "Free");
//   console.log(filterData);

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
