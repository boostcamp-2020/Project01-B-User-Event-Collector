import axios from 'axios';
export const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

export const request = async (url, option) => {
    const options = { ...requestOptions, option };

    try {
        const { data } = await axios({ ...options, url });
        return data.data;
    } catch (err) {
        // TODO : error handling
        console.log(err);
    }
};
const likeRequestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
};
export const likeRequest = async (url, option) => {
    const options = { ...likeRequestOptions, ...option };
    try {
        await axios({ ...options, url });
    } catch (err) {
        console.error(err);
    }
};

const unlikeOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'appliction/json',
    },
};
export const unlikeRequest = async (url, option) => {
    const options = { ...unlikeOptions, ...option };
    try {
        await axios({ ...options, url });
    } catch (err) {
        console.error(err);
    }
};
const addTracksToPlaylistOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
};
export const addTracksToPlaylist = async (url, option) => {
    const options = { ...addTracksToPlaylistOptions, ...option };
    console.log(options);
    try {
        await axios({ ...options, url });
    } catch (err) {
        console.error(err);
    }
};
