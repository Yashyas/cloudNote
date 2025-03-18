const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, // Store the user ID
        ref: "user", // Reference the User model
        
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: String,
        default: Date.now
    },

})

module.exports = mongoose.model('notes',NotesSchema);