const host = 'http://localhost:4500';
const eventHost = 'http://localhost:5500';
const baseUrl = `${host}/api`;
const eventUrl = `${eventHost}/api`;
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
    login: `${host}/auth`,
    chart: `${baseUrl}/chart`,

    event: `${eventUrl}/events/`,
    playEvent: `${eventUrl}/play-events/`,
};

export default apiUrl;
