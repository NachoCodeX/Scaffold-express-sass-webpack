import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MovieSchema=new Schema({
  name:String,
  author:String,
});

module.exports=mongoose.model('Movie',MovieSchema);
