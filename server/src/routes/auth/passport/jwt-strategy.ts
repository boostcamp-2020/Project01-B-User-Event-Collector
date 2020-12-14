import { PassportStatic } from 'passport';
import passportJwt, { ExtractJwt } from 'passport-jwt';
import { getManager } from 'typeorm';
import User from '../../../models/User';

const JwtStrategy = passportJwt.Strategy;
const config = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET,
};

const auth = async (payload: any, done:any) => {
    try {
        const manager = getManager();
        const user = await manager.findOne(User, payload.id);
        if (!user) return done(null, false);

        return done(null, { id: user.id });
    } catch (err) {
        console.error(err);
        return done(null, false);
    }
};

export const jwtStrategy = (passport: PassportStatic) => {
    passport.use('jwt', new JwtStrategy(config, auth));
};
