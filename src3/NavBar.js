import {Link} from "react-router-dom";
const NavBar = () => {
    return (<nav>
        <ul>
            <li>
                <Link to="Home">הבית</Link>
            </li>
            <li>
                <Link to="Log">כניסה</Link>
            </li>
            <li>
                <Link to="List">רשימה</Link>
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