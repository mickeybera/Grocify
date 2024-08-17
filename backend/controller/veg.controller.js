import Veg from "../model/vegi.model.js";

export const getVeg=async (req,res)=>{
    try {
        const veg= await Veg.find();
        res.status(200).json(veg);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
};