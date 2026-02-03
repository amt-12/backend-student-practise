const { mongoose,Schema } = require("mongoose");

const RegisterModel = new Schema({
    username: { 
        type: String, 
        required: true,
    },
    password: { 
        type: String, 
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
})
module.exports = mongoose.model("RegisterModel",RegisterModel);