import axios from 'axios';
import { getCookie } from 'utils/cookies';
import apiUrl from 'constants/apiUrl';
import { rejects } from 'assert';

export const getRequestOptions = (method, options, headers) => ({
    method: method,
    headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('token'),
        ...headers,
    },
    ...options,
});

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

export const request = async (url, option, token) => {
    const options = { ...requestOptions, ...option };
    if (token) options.headers.Authorization = token;

    try {
        const { data } = await axios({ ...options, url });
        return data.data;
    } catch (err) {
        console.error(err);
    }
};


export const requestTracks = async (apiUrl, cookie) => {
    const data = await request(apiUrl, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: cookie,
        }});
    return data;
}

export const requestByCookie = async (apiUrl) => {
    // const cookies = new Cookies(req, res);
    const data = await request(apiUrl, {
        headers: {
            Authorization: cookies.get('token') || 'no cookie',
        },
    });
    return data;
};

export const requestPlaylists = async (apiUrl) => {
    try {
        const { data } = await axios(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getCookie('token'),
            },
        });
        return data.data;
    } catch (err) {
        alert('로그인이 필요한 서비스입니다!');
        console.log(err);
        rejects(new Error());
    }
};

export const addToLibrary = async (url, option) => {
    const options = { ...getRequestOptions('POST', option) };
    try {
        await axios({
            ...options,
            url,
        });
    } catch (err) {
        alert('로그인이 필요한 서비스입니다!');
        console.error(err);
        rejects(new Error());
    }
};

export const addToPlaylist = async (url, data) => {
    const options = { ...getRequestOptions('POST', data) };
    try {
        await axios({
            ...options,
            url,
        });
    } catch (err) {
        alert('로그인이 필요한 서비스입니다!');
        console.error(err);
        rejects(new Error());
    }
};

export const deleteFromLibrary = async (url, option) => {
    const options = { ...getRequestOptions('DELETE', option) };
    try {
        await axios({
            ...options,
            url,
        });
    } catch (err) {
        alert('로그인이 필요한 서비스입니다!');
        console.error(err);
        rejects(new Error());
    }
};

export const createPlaylist = async (data) => {
    try {
        await axios(`${apiUrl.playlist}`, {
            method: 'POST',
            headers: {
                'Content-Typee': 'application/json',
                Authorization: getCookie('token'),
            },
            data: {
                ...data,
            },
        });
    } catch (err) {
        alert('로그인이 필요한 서비스입니다!');
        console.error(err);
        rejects(new Error());
    }
};
export const sendEvent = async (eventData) => {
    try {
        await axios.post(apiUrl.event, eventData);
    } catch (err) {
        console.log(err.response.data);
        // TODO: 로그 손실 방지 처리 & 에러 핸들링
    }
};

export const sendPlayEvent = async (eventData) => {
    try {
        await axios.post(apiUrl.playEvent, eventData);
    } catch (err) {
        console.log(err.response.data);
        // TODO: 로그 손실 방지 처리 & 에러 핸들링
    }
};
