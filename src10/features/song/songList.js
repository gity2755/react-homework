import { addSong, removeSong, selectedSong } from "./songSlice";
import { useSelector, useDispatch } from 'react-redux'
import AddSong from "./addSong";
const SongList = () => {
    let arr = useSelector(sta => sta.song.arr)
    let dispatch = useDispatch();
    return (<> <ol>
        {arr.map(item => <li key={item.id}>{item.name}
            <input type='button' name="addSong" value="removeSong" onClick={() => { dispatch(removeSong(item.id)) }} />
            <input type='button' name="showSong" value="show song" onClick={() => { dispatch(selectedSong(item)) }} /></li>)}
    </ol>
         <AddSong/>
    </>);
}

export default SongList;