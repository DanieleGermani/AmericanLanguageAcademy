const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

let CamaraSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    editable:  {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Camara', CamaraSchema);
