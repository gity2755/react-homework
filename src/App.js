import './App.css';
import SongList from './features/song/songList.js';
import { useSelector } from 'react-redux';
import SongDetails from './features/song/songDetails.js';
function App() {
  let selected=useSelector(sta=>sta.song.selectedSong)
  return (
    <div className="App">
      <SongList/>
      {selected&& <SongDetails/>}
    </div>)
}

export default App;
