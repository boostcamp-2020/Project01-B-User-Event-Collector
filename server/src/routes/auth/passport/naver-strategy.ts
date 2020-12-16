/* eslint-disable prefer-destructuring */
import { PassportStatic } from 'passport';
import passportNaver, { StrategyOption } from 'passport-naver';
import { getManager } from 'typeorm';
import User from '../../../models/User';

const NaverStrategy = passportNaver.Strategy;

const config : StrategyOption = {
    clientID: process.env.CLIENT_ID || 'clientID',
    clientSecret: process.env.CLIENT_SECRET || 'clientSECRET',
    callbackURL: process.env.REDIRECT_URL || 'callbackURI',
};

const auth = async (accessToken :any, refreshToken: any, profile: any, done:any) => {
    try {
        const manager = getManager();
        let user = await manager.findOne(User, { password: profile.id });

        if (!user) {
            user = new User();
            user.email = profile.emails[0].value;
            user.name = user.email.split('@')[0];
            user.password = profile.id;
            await manager.save(user);
        }
        return done(null, user);
    } catch (err) {
        // TODO : 예외처리 필요
        // 인증실패 ? 알 수 없는 오류 발생 ?
        console.error(err);
        return done(err, false);
    }
};

export const naverStrategy = (passport : PassportStatic) => {
    passport.use('naver', new NaverStrategy(config, auth));
};
