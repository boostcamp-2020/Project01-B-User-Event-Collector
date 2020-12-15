const host = 'http://localhost:4500';
const baseUrl = `${host}/api`;

const apiUrl = {
    magazine: `${baseUrl}/magazines`,
    news: `${baseUrl}/news`,
    playlist: `${baseUrl}/playlists`,
    mixtape: `${baseUrl}/library/mixtapes`,
    album: `${baseUrl}/albums`,
    track: `${baseUrl}/tracks`,
    artist: `${baseUrl}/artists`,
    libraryAlbum: `${baseUrl}/library/albums`,
    libraryTrack: `${baseUrl}/library/tracks`,
    libraryArtist: `${baseUrl}/library/artists`,
    libraryPlaylist: `${baseUrl}/library/playlists`,
    libraryMixtape: `${baseUrl}/library/mixtapes`,
    like: `${baseUrl}/library/`,
    addTracksToPlaylist: `${baseUrl}/playlists/tracks`,
    user: `${baseUrl}/users`,
    login: `${host}/auth/naver-login`,
    event: `${baseUrl}/events/`,
    playEvent: `${baseUrl}/play-events/`,
};

export default apiUrl;
