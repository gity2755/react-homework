
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";


const Log = () => {
    var name;
    const changeName = (e) => {
        name = e.target.value;
    };
    const navG = useNavigate();
    function login() {
        if(/\d/.test(name) || name.length <= 2)
        navG("Home");
        else
    navG("List/"+name)
    };

 
    return (
    <>
        <input type="text" placeholder="name" onChange={changeName}/>
        <input type="button" onClick={login} value={"send"}/>
            <Outlet />
    </>
        );
}

export default Log;