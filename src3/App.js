
import { Routes, Route } from 'react-router';
import Home from './Home';
import Log from './Log';
import List from './List';
import NavBar from './NavBar';
import Details from './Details';


function App() {
  return (<>
    <NavBar />
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Log" element={<Log />} >
        <Route path="Home" element={<Home />} />
        <Route path="List/:name" element={<List />} />
        <Route path="List/:name/Details/:id" element={<List />} />
      </Route>
      <Route path="List" element={<List />} >

        <Route path="Details/:id" element={<Details />} />
      </Route>
      
      <Route path="" element={<Home />} />
      <Route path="*" element={<h1>not found!!</h1>} />
    </Routes>
  </>
  );
}

export default App;
