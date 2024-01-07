import {Link} from "react-router-dom";
const NavBar = () => {
    return (<nav>
        <ul>
            <li>
                <Link to="home">הבית</Link>
            </li>
            <li>
                <Link to="log">כניסה</Link>
            </li>
            <li>
                <Link to="myList">רשימה</Link>
            </li>
            <li>
                <Link to="about">אודות</Link>
            </li>
             <li>
                <Link to="/">ריק</Link>
            </li> 
            <li>
                <Link to="dsdsd">קשקוש</Link>
            </li>
        </ul>
    </nav>);
}

export default NavBar;