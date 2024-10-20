const mongoose = require('mongoose');

const newMobileSchema = new mongoose.Schema({

    mobileName : {
        type: String,
        required: true
    },

    mobileBrand : {
        type: String,
        required: true
    },

    mobileRam: {
        type: String,
        required: true
    },

    mobileStorage: {
        type: String,
        required: true
    },

    mobilePrice : {
        type: String,
        requred: true
    },

    mobilePurchaseDate : {
        type: String,
        requred: true
    },

    mobilePhotos: {
      type: [String],
      required: true  
    },

    mobileCategory: {
        type: String,
        required: true
    },

    mobileCondition: {
        type: String,
        required: true
    }

});

const NewMobile = mongoose.model('NewMobile', newMobileSchema);

module.exports = NewMobile;

