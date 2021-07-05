const mongoose = require('mongoose');

const testimonialSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    postBy: { type: String, required: true },
    testimonialDesc: { type: String, required: true },
    createdOn: { type: Date,default: Date.now},
    lastUpdatedOn: { type: Date,default: Date.now},
    image:{ type: String },
    active:{ type: Number, default:1}
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
