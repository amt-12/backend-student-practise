const { mongoose,Schema } = require("mongoose");

const RegisterModel = new Schema({
    email:{
        type: String,
        required: true,
    },
    name: {
        type: String,

    },
    username: { 
        type: String, 
       
    },
    avatar: {
        type: String,
    },
    password: { 
        type: String, 
        
    },
    phoneNumber: {
        type: Number,

    },
    provider: {
        type: String,
    }
})
module.exports = mongoose.model("RegisterModel",RegisterModel);