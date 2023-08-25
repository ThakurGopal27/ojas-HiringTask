const mongoose = require('mongoose');

require('dotenv').config();
exports.connect=()=>{

    mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology:true ,UseNewUrlParser:true})
    .then(()=>{
        console.log("DB connected Successfully")
    }).catch((err)=>{
        console.log("DB CONNECTION ERROR !");
        console.error(err);
        process.exit(1);
    })
}