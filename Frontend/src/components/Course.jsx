import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  const bookData = [
    {
      id: 1,
      name: "Story",
      title: "A crow",
      price: 0,
      category: "Free",
      description:
        "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 2,
      name: "Food Book",
      title: "Delicious Food",
      price: 100,
      category: "Paid",
      description:
        "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 3,
      name: "Story",
      title: "World of Animal",
      description:
        "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      price: 0,
      category: "Free",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 4,
      name: "Story",
      title: "A king and There Castle",
      description:
        "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      price: 150,
      category: "Paid",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 5,
      name: "Story",
      title: "King of Atlantis",
      description:
        "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      price: 0,
      category: "Free",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
    {
      id: 6,
      name: "Programming Book",
      title: "Learn Python",
      description:
        "Read this book free. share this book with your friends also. this is free for everyone. share this website with your friends to increase knowledge. learn new thing everyday from here. don't forget to visit again. Thank you",
      price: 59,
      category: "Paid",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1722557588~exp=1722561188~hmac=e640c9c48576b14c10dcc2a6e12ab95a5c9cde9d004ce2df5ef367e101031ccc&w=740",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl min-h-screen container mx-auto md:px-20 px-4">
        <div className="mt-10 pt-20 flex flex-col items-center justify-center dark:bg-slate-900">
          <h1 className="text-4xl font-semibold leading-normal md:leading-none text-center">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>{" "}
          </h1>
          <p className="mt-10 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quisquam itaque iste eius labore alias. Sed eos suscipit repellat
            recusandae inventore natus, tempora adipisci ab repellendus
            reprehenderit facere vero iure atque, quidem rem id molestias minima
            voluptas, ut amet. Eaque reiciendis fugit ipsum quae, sit quo
            officia iusto assumenda aliquam.
          </p>
          <Link to='/'><button className="btn btn-secondary mt-6">Back</button></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {bookData.map((book, index) => (
            <Cards key={index} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
