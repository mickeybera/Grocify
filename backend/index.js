import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import vegRoute from "./route/veg.route.js";
import userRoute from "./route/user.route.js";


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT||4000;
const URI=process.env.MongoDBURI;
//conneted to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("conneted to mongodb");
} catch (error) {
    console.log("Error: ", error);
    
}

//define routes
app.use("/veg",vegRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});