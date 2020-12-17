import { PassportStatic } from 'passport';
import passportLocal from 'passport-local';
import { getManager } from 'typeorm';
import User from '../../../models/User';
import bcrypt from 'bcrypt';

const Localstrategy = passportLocal.Strategy;
const config = {
    usernameField: 'email',
    passwordField: 'pw',
};

const auth = async (id:any, password:any, done:any) => {
    try {
        const manager = getManager();
        const user = await manager.findOne(User, { email: id });

        if (!user) return done(null, { success: false, message: '존재하지 않는 사용자 입니다.' });
        const result = await bcrypt.compare(password, user.password);
        if(result) {
            return done(null, { success: true, user });
        }
    } catch (err) {
        console.error(err);
        return done(err, { success: false, messasge: err });
    }
};

export const localStrategy = (passport : PassportStatic) => {
    passport.use('local-login', new Localstrategy(config, auth));
};
