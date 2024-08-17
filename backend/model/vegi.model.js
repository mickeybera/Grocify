import mongoose from "mongoose";

const vegSchema=mongoose.Schema({
    name:String,
    price:Number,
    image:String,
})
const Veg=mongoose.model("Veg",vegSchema);

export default Veg;