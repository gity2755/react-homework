import { Dispatch } from "redux";
import{saveEditedBook} from '../Store/actions/book.js'
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const EditBook = () => {
    let forEdit=useSelector(state=>state.selectedBookForEdit)
    let myDisp=useDispatch()
    const[details,setDetails]=useState({...forEdit});
    const change=(e)=>{
        setDetails({...details,[e.target.name]: e.target.value})
    }
    const save=(e)=>{
        e.preventDefault();
        myDisp(saveEditedBook(details));
        console.log("details  "+details.name);
    }
    return ( 
        <form onSubmit={save}>
            עריכת פרטי ספר
            <label>name</label>
            <input type="text" name="name" value={details.name} onChange={change}/>
            <label>code</label>
            <input type="text" name="code" value={details.code} onChange={change}/>
            <label>price</label>
            <input type="text" name="price" value={details.price} onChange={change}/>
            <label>author</label>
            <input type="text" name="author" value={details.author} onChange={change}/>
            <input type="submit"/>
        </form>
     );
}
 
export default EditBook;