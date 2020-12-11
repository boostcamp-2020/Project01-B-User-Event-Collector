import axios from 'axios';
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

export const addToLibrary = async (url, option) => {
    const options = { ...getRequestOptions('POST', option) };
    try {
        await axios({ ...options, url });
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
