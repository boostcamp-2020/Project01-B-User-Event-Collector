const baseUrl = 'http://localhost:4500/api';

const apiUrl = {
    magazine: `${baseUrl}/magazines`,
    news: `${baseUrl}/news`,
    playlist: `${baseUrl}/playlists`,
    mixtape: `${baseUrl}/library/mixtapes`,
    album: `${baseUrl}/albums`,
    track: `${baseUrl}/tracks`,
};

export default apiUrl;
