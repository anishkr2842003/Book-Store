import bookModel from "../model/book.model.js";

export const getBook = async(req, res) => {
  try {
    const book = await bookModel.find();
    res.status(200).json(book);
  } catch (error) {
    console.log('Error : ', error);
    res.error(500).json(error)
  }
};
