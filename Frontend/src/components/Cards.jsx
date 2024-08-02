import React from "react";

function Cards({book}) {
    
  return (
    <>
      <div className="my-5 ">
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 border dark:bg-slate-900 dark:text-white dark:border-white">
          <figure>
            <img
              src={book.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {book.title}
              <div className="badge badge-secondary">{book.name}</div>
            </h2>
            <p>{book.description.split(" ", 15).join(" ")}...</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline py-3 px-5 hover:bg-pink-500 hover:text-white duration-300 transition-all ease-in-out"> {book.price > 0 ? '₹'+book.price : 'Free'}</div>
              <div className="badge badge-outline py-3 px-5 hover:bg-pink-500 hover:text-white duration-300 transition-all ease-in-out">{book.price > 0 ? "Buy Now" : 'Read'}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
