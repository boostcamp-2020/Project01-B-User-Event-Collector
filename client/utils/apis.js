import axios from 'axios';
import apiUrl from 'constants/apiUrl';

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

export const addToLibrary = async (url, data) => {
    await request(url, { method: 'POST', data });
};

export const addToPlaylist = async (url, data) => {
    await request(url, { method: 'POST', data });
};

export const deleteFromLibrary = async (data) => {
    await request(`${apiUrl.like}${data.type}s/${data.id}`, { method: 'DELETE' });
};
