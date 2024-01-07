import Button from '@mui/material/Button';

const SearchBar = ({label,searchFunc}) => {
    let txt;

    return ( <>
    <input type="text"   onChange={(e)=>{txt=e.target.value}}/>
   
    <Button variant="contained" onClick={()=>{searchFunc(txt)}}>{label}</Button>
    </> );
}
 
export default SearchBar;