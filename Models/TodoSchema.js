const mongoose = require('mongoose');
const {Schema} =mongoose
const TodoSchema =new Schema({
    title:String,
    descirption:String
})
module.exports= mongoose.model('Todo', TodoSchema);