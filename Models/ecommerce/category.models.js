import moongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    }
},{
    timeStamp:true
});

export const Category = mongoose.model("Category", categorySchema);