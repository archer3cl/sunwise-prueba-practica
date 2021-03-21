import makeRequest from './services/spotify/request';
import { useEffect, useState } from 'react';
import SpotifyContainer from './components/Spotify/SpotifyContainer';
import Header from './components/common/Header/Header';
import Sidebar from './components/common/Sidebar/Sidebar';

function App() {
  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylists, setfeaturedPlaylists] = useState([]);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    makeRequest('new-releases').then(({ albums }) => {
      setNewReleases(albums.items);
    });
    makeRequest('featured-playlists').then(({ playlists }) => {
      setfeaturedPlaylists(playlists.items);
    });
    makeRequest('categories').then(({ categories }) => {
      setcategories(categories.items);
    });
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <main>
        <Header />
        <div className="spotify-lists">
          <SpotifyContainer title="RELEASED THIS WEEK" data={newReleases} />
          <SpotifyContainer title="FEATURED PLAYLISTS" data={featuredPlaylists} />
          <SpotifyContainer title="BROWSE" data={categories} imagesKey="icons" />
        </div>
      </main>
    </div>
  );
}

export default App;
