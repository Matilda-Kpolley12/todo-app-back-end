const {Schema, model} = requuire("mongoose")

todoSchema = new Schema({
    text:{
        type: String,
        required : true,
    },
    completed:{
        type: Boolean,
        default: false,
    },
})