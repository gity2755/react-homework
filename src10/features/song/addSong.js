import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "./songSlice.js";
const AddSong = () => {
    let dispatch=useDispatch()
    const[details,setDetails]=useState({});
    const change=(e)=>{
        setDetails({...details,[e.target.name]: e.target.value})
    }
    const save=(e)=>{
        e.preventDefault();
        dispatch(()=>dispatch(addSong(details)));
       
    }
    return ( 
        <form onSubmit={save}>
            הוספת שיר
            <label>name</label>
            <input type="text" name="name" value={details.name} onChange={change}/>
            <label>id</label>
            <input type="number" name="id" value={details.id} onChange={change}/>
            <input type="submit"/>
        </form>
     );
}
 
export default AddSong;