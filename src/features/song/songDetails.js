import { useSelector } from "react-redux";

const SongDetails = () => { 
    let details=useSelector(st=>st.song.selectedSong)
    return ( 
       
    <ul>
       name: <li>{details.name}</li>
       id: <li>{details.id}</li>
       author: <li>{details.author}</li>
    </ul> );
}
 
export default SongDetails;