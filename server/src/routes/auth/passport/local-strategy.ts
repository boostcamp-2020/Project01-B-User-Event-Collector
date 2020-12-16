import { PassportStatic } from 'passport';
import passportLocal from 'passport-local';
import { getManager } from 'typeorm';
import User from '../../../models/User';

const Localstrategy = passportLocal.Strategy;
const config = {
    usernameField: 'email',
    passwordField: 'pw',
};

const auth = async (id:any, password:any, done:any) => {
    console.log('local', id, password);
    try {
        const manager = getManager();
        const user = await manager.findOne(User, { email: id, password });
        if (!user) return done(null, { success: false, message: '존재하지 않는 사용자 입니다.' });
        return done(null, user);
    } catch (err) {
        console.error(err);
        return done(null, { success: false, messasge: err });
    }
};

export const localStrategy = (passport : PassportStatic) => {
    passport.use('local-login', new Localstrategy(config, auth));
};
