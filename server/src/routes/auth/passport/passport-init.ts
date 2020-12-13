import { PassportStatic } from 'passport';
import { naverStrategy } from './naver-strategy';

const passportInit = (pp : PassportStatic) => {
    naverStrategy(pp);
};

export default passportInit;
