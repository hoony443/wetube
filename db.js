// mongoDB는 Database이고, mongoose는 javascript와 연결해주는 Adaptor

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
 
mongoose.connect (
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB")
const handleError = (error) => console.log("❌ DB Connection Error")

db.once("open", handleOpen);
db.on("error", handleError);