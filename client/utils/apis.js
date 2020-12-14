import axios from 'axios';
import Cookies from 'cookies';
import { getCookie } from 'utils/cookies';
import apiUrl from 'constants/apiUrl';

export const getRequestOptions = (method, options, headers) => ({
    method: method,
});

export const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

export const request = async (url, option) => {
    const options = { ...requestOptions, ...option };

    try {
        const { data } = await axios({ ...options, url });
        return data.data;
    } catch (err) {
        // TODO : error handling
        console.log(err);
    }
};
export const requestByCookie = async (req, res, apiUrl) => {
    const cookies = new Cookies(req, res);
    const data = await request(apiUrl, {
        headers: {
            Authorization: cookies.get('token'),
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
            headers: {
                Authorization: getCookie('token'),
            },
        });
    } catch (err) {
        console.error(err);
    }
};

export const addToPlaylist = async (url, data) => {
    await request(url, { method: 'POST', data });
};

export const deleteFromLibrary = async (data) => {
    await request(`${apiUrl.like}${data.type}s/${data.id}`, { method: 'DELETE' });
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
