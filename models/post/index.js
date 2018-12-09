var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String, 
    body: String, 
    createdAt: {type: Date, default: Date.now},
    author: String, 
    published: {type: Boolean, default: false},
    meta: {
        likes: Number
    }
});

// this is a start to the schema we'll be developing, 
// but it's commented out for now so that we can test the example postschema version


module.exports = mongoose.model('Posts', PostSchema);