const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
      type: String,
      required : [true,"User must tyhpe name"],
      unique : true,
    //   maxlength: 50,
    },
    token: {
      type: String,
    },
    online: {
        type : Boolean,
        default : false,
    }
    // email: {
    //   type: String,
    //   trim: true, // 공백 없애기
    //   unique: 1,
    // },
    // password: {
    //   type: String,
    //   minlength: 5,
    // },
    // lastname: {
    //   type: String,
    //   maxlength: 50,
    // },
    // role: {
    //   type: Number,
    //   default: 0,
    // },
    // image: String,
    // tokenExp: {
    //   type: Number,
    // },
  });

  module.exports = mongoose.model("User",userSchema);
