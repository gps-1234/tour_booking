import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';
dotenv.config();
const app=express();
const port=process.env.PORT||8000;
const corsOptions=
{
    origin:true,
    credentials:true
}
app.get("/",(req,res)=>{
    res.send('api is working');
})
//database coonection
const connect=async()=>{
    try{
         await mongoose.connect(process.env.MONGO_URL,{
                 useNewUrlParser:true,
                 useUnifiedTopology:true
         })
         console.log('MongoDb database conected');
    } catch(err){
          console.log('Database connection failed');
    }
}



app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/user',userRoute);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute)
app.listen(port,()=>{
console.log('server listening on port',port);
connect();
})

