const { mongoose,Schema } = require("mongoose");

const RegisterModel = new Schema({
    email:{
        type: String,
        required: true,
    },
    password: { 
        type: String, 
        
    },
    provider: {
        type: String,
    },
    role:{
        type: String,
        default:"user",
        enum:["user","doctor"]
    }
})
module.exports = mongoose.model("RegisterModel",RegisterModel);