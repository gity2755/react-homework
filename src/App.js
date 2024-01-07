import {useSelector} from 'react-redux'
import  List  from './components/list.js';
import BookDetails from "./components/bookDetails"
import EditBook from "./components/editBook"
import React from 'react';
function App() {
  let selected=useSelector(sta=>sta.selectedBook)
  let selectedForEdit=useSelector(sta=>sta.selectedBookForEdit)
  return (
    <div className="App">
      <List/>
      {selected&& <BookDetails/>}
      {selectedForEdit&& <EditBook/>}
    </div>
  );
}

export default App;
