import mongoose from 'mongoose';
import app from './app';



mongoose.connect('mongodb://localhost:27017/movies',(err,res) => {
  if(err) console.log(`Error----> ${err}`);
  console.log("DATABASE CONNECT SUCCESSFULY");
  app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
  });

});
