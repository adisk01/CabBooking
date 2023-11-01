const mongoose = require("mongoose");
const Cab = require("./models/Cab");

const getAllCabs = async(req,res,next) =>{
    let blogs;
    try{
        blogs = await Cab.find();
        console.log(blogs);
    }catch(e){
        console.log(e);
    }

    if(!blogs){
        return res.status(404).json({message : " No blogs found"});
    }

    

    return res.status(200).json({blogs});
}

module.exports = { getAllCabs : getAllCabs } ;