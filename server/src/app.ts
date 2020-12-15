import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import passport from 'passport';
import 'dotenv/config';
import passportInit from './routes/auth/passport/passport-init';
import apiRouter from './routes';
import authRouter from './routes/auth';
import db from './db';

db();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
passportInit(passport);

app.use(cors({
    origin: process.env.CLIENT_HOST,
    credentials: true,
}));

app.use('/auth', authRouter);
app.use('/api', apiRouter);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`API Server App Listening on PORT ${app.get('port')}`);
});
