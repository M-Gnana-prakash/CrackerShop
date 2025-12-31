const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a banner title']
    },
    subtitle: {
        type: String
    },
    image: {
        type: String,
        required: [true, 'Please add a banner image']
    },
    link: {
        type: String
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Banner', BannerSchema);
