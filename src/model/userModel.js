const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        required : [true, 'name is required']
    },
    email : {
        type : String,
        required : [true, 'email is required']
    },
    password : {
        type : String,
        required : [true, 'password is required']
    },
    created_at : {
        type : Date,
        default : Date.now,
        required : [true, 'created_at is required']
    },
    updated_at : {
        type : Date,
    }
}, {collection: 'user'});

const User = mongoose.model("User", UserSchema)
module.exports = {User, UserSchema};