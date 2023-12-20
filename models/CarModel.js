const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String,
        required: true
    },
    img:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    daysAvailable:{
        type:String,
        required:true
    },
    bluetooth:{
        type:String,
        required:true
    },
    usbPort:{
        type:String,
        required:true
    },
    gps:{
        type:String,
        required:true
    },
    ac:{
        type:String,
        required:true
    },
})

const CarListModel = mongoose.model("car",CarSchema);

module.exports = CarListModel;