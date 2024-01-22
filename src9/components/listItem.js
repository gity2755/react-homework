import{useDispatch} from 'react-redux'
import {deleteBook,selectBookToRead,selectBookForEdit} from "../Store/actions/book"
const ListItem = ({one}) => {
    let dispatch=useDispatch()
    console.log(one.name);
    return (  <div>
        name <h2>{one.name}</h2>
        <input onClick={()=>{dispatch(deleteBook(one.code))}} type='button' value='delete'/>
        <input onClick={()=>{dispatch(selectBookForEdit(one))}} type='button' value='edit'/>
        <input onClick={()=>{dispatch(selectBookToRead(one))}} type='button' value='read'/>
    </div>);
}
 
export default ListItem;