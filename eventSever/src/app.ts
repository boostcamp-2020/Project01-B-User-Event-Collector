import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import 'dotenv/config';
import db from './db';
import router from './routes';

db();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_HOST,
    credentials: true,
}));

app.use('/api', router);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`API Server App Listening on PORT ${app.get('port')}`);
});
