const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Abstract")


const cardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports= mongoose.model('Card', cardSchema);
