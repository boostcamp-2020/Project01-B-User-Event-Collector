import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import 'dotenv/config';
import passportInit from './routes/auth/passport/passport-init';
import apiRouter from './routes';
import authRouter from './routes/auth';
import db from './db';

db();
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
passportInit(passport);
app.use(morgan('dev'));

app.use(cors({
    origin: true,
    credentials: true,
}));

app.use('/auth', authRouter);
app.use('/api', apiRouter);

app.listen(app.get('port'), () => {
    console.log(`API Server App Listening on PORT ${app.get('port')}`);
});
