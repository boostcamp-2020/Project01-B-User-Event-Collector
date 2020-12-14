import axios from 'axios';
import Cookies from 'cookies';
import { getCookie } from 'utils/cookies';

export const getRequestOptions = (method, options, headers) => ({
    method: method,
    headers: {
        'Content-Type': 'application/json',
        ...headers,
    },
    ...options,
});

export const request = async (url, option) => {
    const options = { ...getRequestOptions('GET', option) };

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
        "Authorization" : cookies.get('token')
        }
    });
    return data;
}

export const addToLibrary = async (url, option) => {
    const options = { ...getRequestOptions('POST', option) };
    try {
        await axios({ ...options, url , headers: {
            "Authorization" : getCookie('token')
            }});
    } catch (err) {
        console.error(err);
    }
};

export const deleteFromLibrary = async (url, option) => {
    const options = { ...getRequestOptions('DELETE', option) };
    try {
        await axios({ ...options, url });
    } catch (err) {
        console.error(err);
    }
};
export const addToPlaylist = async (url, option) => {
    const options = { ...getRequestOptions('POST', option) };
    try {
        await axios({ ...options, url });
    } catch (err) {
        console.error(err);
    }
};
