/*const mongoose = require ('mongoose')
const User = mongoose.model( 'User' , {
    username : {
              type: String, required : true,  trim : true
    },
    password : {
        type: String, required: true,
        trim: true,
        minlength: 8
    },
    email : {
        type: String,
        required: true,
        trim: true,
        lowercase : true,
        unique: true
    },
    age : {
        type: Number,
        default: 18
    },
    city: {
        type:String
    }
})

module.exports = User
*/

const mongoose = require ('mongoose')
const validator = require ('validator')

const User = mongoose.model( 'User' , {
    username : {
  type: String,
required : true, trim : true
    },
    password : {
     type: String,
  required: true,  trim: true,
        minlength: 8
    },
    email : {
        type: String,
        required: true,
        trim: true,  lowercase : true,
        unique: true,
        validate(val){
            if(!validator.isEmail(val)){
     throw new Error (' email is envaled')
 }
 }
    },
    age : {
        type: Number,
        default: 18,
        validate(val){
            if (val <= 0){   throw new Error ("age should positive")
            }  } },
    city: {
        type:String
    }
})

module.exports = User