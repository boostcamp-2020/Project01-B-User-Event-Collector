import axios from 'axios';

export const requestOptions = {
    method: 'GET',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const request = async (url, option) => {
    const options = { ...requestOptions, option };

    try {
        const { data } = await axios({ ...options, url });
        return data.data;
    } catch (error) {
        // TODO : error handling
        console.log(err);
    }
};
