import { useState } from "react"

const Car = (props) => {
    let [show, setShow] = useState(false);
    return (<div>
        {props.xxxCar.id ==1 ? <h1> id: {props.xxxCar.id}  company:{props.xxxCar.company}</h1>:<h3>id: {props.xxxCar.id}  company:{props.xxxCar.company}</h3>}
        <input type="button" value="delete" onClick={() => { props.xxxdelete(props.xxxCar.id) }} />
        <input type="button" value="move" onClick={() => { props.xxxmove(props.xxxCar.id) }} />
        <input type="button" value={show ? "פחות" : "עוד"} onClick={() => { setShow(!show) }} />
        {show && <div>djsdbfhajsghdasbzbsdhbchbd</div>}

    </div>
    )
}

export default Car;
