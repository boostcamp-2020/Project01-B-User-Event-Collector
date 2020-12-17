import { PassportStatic } from 'passport';
import { naverStrategy } from './naver-strategy';
import { jwtStrategy } from './jwt-strategy';
import { localStrategy } from './local-strategy';

const passportInit = (pp : PassportStatic) => {
    naverStrategy(pp);
    jwtStrategy(pp);
    localStrategy(pp);
};

export default passportInit;
