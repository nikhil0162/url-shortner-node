const mongoose = require('mongoose')


async function connectDB(url){
    return mongoose.connect(url).then((req, res)=> console.log('DB connected'))
}


module.exports = {
    connectDB
}
