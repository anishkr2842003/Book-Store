import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'

import bookRoute from './routes/book.route.js'
import userRoute from './routes/user.route.js'

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config()
const port = process.env.PORT || 4000;
const dburi = process.env.DBURI

//connect to mongoDB
mongoose.connect(dburi).then(()=>console.log('Database connected succesfully'))


// defining route

app.use('/book',bookRoute)
app.use('/user', userRoute)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})