const mongoose=require("mongoose");
const env=require("dotenv");
env.config();
mongoose.set("strictQuery",false);
const url=process.env.URL;
const connection =mongoose.connect(url);

module.exports=connection;