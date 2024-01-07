import { courses } from "./cours";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState } from "react";
import Log from "./Log";


const List = () => {
    let { name } = useParams();
    let x;
    let [arr, setArr] = useState([]);
    function changeNum(e) {
        x = e.target.value;
        setArr(courses.map(item => { if (item.cnt >= x) return <li key={item.id}> <Link to={"Details/" + item.id}>{item.name}</Link></li> }))
    }
    return (<>
        {/* <h5>{arr}</h5>    */}
        <h1>list</h1>
        <h2>hello to:{name}</h2>
        <input type="number" onChange={changeNum} />
        <h4>the list:</h4>

        <h5>{arr}</h5>

        {/* <Outlet /> */}
    </>)
}

export default List;