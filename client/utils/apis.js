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

export const addToLibrary = async (data) => {
    await request(`${apiUrl.like}${data.type}s`, { method: 'POST', data: { id: data.id } });
};

export const addToPlaylist = async (url, data) => {
    await request(url, { method: 'POST', data });
};

export const deleteFromLibrary = async (data) => {
    await request(`${apiUrl.like}${data.type}s/${data.id}`, { method: 'DELETE' });
};

export const sendEvent = async (eventData) => {
    try {
        await axios.post(apiUrl.event, eventData);
    } catch (err) {
        console.log(error.response.data);
        // TODO: 로그 손실 방지 처리 & 에러 핸들링
    }
};
