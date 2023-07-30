const mongoose = require("mongoose");

const data = new mongoose.Schema({
    task_id:Number,
    name:String,
    description:String,
    due_date:String,
    status:String,
});

const userData = mongoose.model("userData", data);
module.exports = userData;