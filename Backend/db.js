const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect('mongodb://localhost:27017/Meme', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to db Successfully")
        }
    })
}
module.exports = connectToDb;