import Cookies from 'cookies';

export const getCookie = (key) => {
    const value = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

export const getTokenFromCtx = ({ req, res }) => {
    const cookies = new Cookies(req, res);
    const token = cookies.get('token');
    return token;
};
