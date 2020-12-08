const baseUrl = 'http://localhost:4500/api';

const apiUrl = {
    magazine: `${baseUrl}/magazines`,
    news: `${baseUrl}/news`,
    playlist: `${baseUrl}/playlists`,
    mixtape: `${baseUrl}/library/mixtapes`,
    album: `${baseUrl}/albums`,
    libraryAlbum: `${baseUrl}/library/albums`,
    libraryTrack: `${baseUrl}/library/tracks`,
    libraryArtist: `${baseUrl}/library/artists`,
    linraryPlaylist: `${baseUrl}/library/playlists`
};

export default apiUrl;
