import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes';
import db from './db';

dotenv.config();
db();
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(cors());

app.use('/', router);

app.listen(app.get('port'), () => {
  console.log(`API Server App Listening on PORT ${app.get('port')}`);
});