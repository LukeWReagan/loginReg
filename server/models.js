const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        default: ""
    },
    password: {
        type: Array,
        default: []
    }
},{timestamps: true});

mongoose.connect('mongodb://localhost:27017/beltTest', {useNewUrlParser:true}, (errs)=>console.log("Db error -- ", errs));

const User = mongoose.model('User', UserSchema);

module.exports = User;
