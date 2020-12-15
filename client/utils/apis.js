import axios from 'axios';
import Cookies from 'cookies';
import { getCookie } from 'utils/cookies';
import apiUrl from 'constants/apiUrl';

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
        // TODO : error handling
        console.log(err);
    }
};

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
    const { data } = await axios(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: getCookie('token'),
        },
    });
    return data.data;
};

export const addToLibrary = async (url, option) => {
    const options = { ...getRequestOptions('POST', option) };
    try {
        await axios({
            ...options,
            url,
        });
    } catch (err) {
        console.error(err);
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
        console.error(err);
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
        console.error(err);
    }
};

export const createPlaylist = async (data) => {
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
