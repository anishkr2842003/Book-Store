import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    title: String,
    price: String,
    category: String,
    image: String,
    description: String
})

const bookModel = mongoose.model('book', bookSchema)

export default bookModel;