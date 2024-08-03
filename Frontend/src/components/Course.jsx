import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {

  const[bookData,setBookData] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get('http://localhost:4001/book');
        setBookData(res.data)
        // console.log(res)
      } catch (error) {
        console.log('Error : ', error)
      }
    }
    getBook();
  },[])

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
