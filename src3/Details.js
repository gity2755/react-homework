import { useParams } from "react-router";
import { courses } from "./cours";

const Details = () => {
    // let params = useParams();//מחזיר אובייקט שמכיל את כל הפרמרטים שנשלחו בשורת היו אר אל
    // let id = params.id;
   let { id } = useParams();
    console.log(id)

    let c = courses.find(item => item.id === +id);
    return (<>
        <h1>cours number {id} :</h1>
        <h2>name: {c.name}</h2>
        <h2>cost: {c.cost}</h2>
        <h2>cout of leasons: {c.cnt}</h2> 
    </>);
}

export default Details;