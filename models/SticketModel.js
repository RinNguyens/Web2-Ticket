const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SticketSchema = new Schema({
    sitCode : {
        type : Schema.Types.ObjectId,
        ref: 'showtime'
    },
    chair : {
        type :String,
        default : ''
    },
    price : {
        type : Number,
        default : 0
    }
});

module.exports = {Sticket : mongoose.model('sicket',SticketSchema)};