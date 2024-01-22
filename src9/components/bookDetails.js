import{useSelector} from 'react-redux'
const BookDetails = () => {
    const selected=useSelector(state=>state.selectedBook)
    return (<div>
        details
       name: <h1>{selected.name}</h1>
       price: <h2>{selected.price}</h2>
       code: <h2>{selected.code}</h2>
       author: <h2>{selected.author}</h2>
    </div>  );
}
 
export default BookDetails;