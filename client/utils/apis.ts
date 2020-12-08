import axios from 'axios';

export async function fetchListData(url) {
    const { data } = await axios.get(url);

    return data.success ? data.data : [];
}
