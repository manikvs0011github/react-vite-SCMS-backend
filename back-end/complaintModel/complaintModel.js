import mongoose from "mongoose";

const compaintModel = mongoose.Schema({
     studentName:{
        type: String,
        required: true
    }, 
    collegeName:{
        type: String,
        required: true
    },
     complaint:{
        type: String,
        required: true
    }
})

export default mongoose.model("Complaints", compaintModel);