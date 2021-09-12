const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TaskSchema = new Schema({

    Subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    Droppingdate: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Task = mongoose.model("Blog", TaskSchema);
module.exports = Task;