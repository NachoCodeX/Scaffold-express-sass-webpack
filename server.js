import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import Routes from './routes/API';
const app =express();


// SET
app.set('port',process.PORT || 8000)
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// USES
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// ROUTES
Routes(app);

app.listen(app.get('port'),()=>{
  console.log(`Server on port ${app.get('port')}`);
});
