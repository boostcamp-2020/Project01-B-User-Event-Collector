import { PassportStatic } from 'passport';
import { naverStrategy } from './naver-strategy';
import { jwtStrategy } from './jwt-strategy';

const passportInit = (pp : PassportStatic) => {
    naverStrategy(pp);
    jwtStrategy(pp);
};

export default passportInit;
