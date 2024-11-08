import mongoose from "mongoose";

//mongoose.scehma is a function
const toDoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    completed: { type: Boolean, default: false } 
})

export default mongoose.model('todo',toDoSchema);

