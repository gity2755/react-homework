import {useSelector} from'react-redux';
import ListItem from "./listItem";
const List = () => {
    let arr=useSelector(st=>{return st.arr})
    console.log(arr);
    return ( <>
    <h1>list books</h1>
    <ul>
        {arr.map(item=><li key={item.code}><ListItem one={item}/></li>)}
    </ul>
    </> );
}
 
export default List;


