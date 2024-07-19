const mongoose = require('mongoose');

mongoose
.connect("mongodb://127.0.01:27017/scatch")
.then(() => {
    console.log("connected");
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose.connection;