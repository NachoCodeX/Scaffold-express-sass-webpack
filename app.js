import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import methodOverride from 'method-override';
import morgan from 'morgan';
import APIRoutes from './routes/API';
import homeRoutes from './routes/home';


const app =express();
// SET
app.set('port',process.PORT || 8000)
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// USES
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(expressValidator());
app.use(morgan('dev'));
// ROUTES
app.use('/',homeRoutes);
app.use('/api',APIRoutes);
// Routes();

module.exports=app;
