import { useState } from "react";
import Car from "./Car";

const AllCars = () => {
  
    let [arr, setArr] = useState([
        { id: 1, company: "toyota" }, { id: 2, company: "honda" }, { id: 3, company: "kia" }
    ])
    const deleteCar = (id) => {
        let index = arr.findIndex((item) => {
            if (item.id == id)
                return true;
            return false;
        }
        )
        let copy = [...arr];
        copy.splice(index, 1);
        setArr(copy);
    }
    const moveCar = (id) => {
        let temp
        let index = arr.findIndex((item) => {
            if (item.id == id) {
                temp = item;
                console.log(item)
                return true;
             
             }
            return false;
        })
      
        let copy = [...arr];
        copy.splice(index, 1);
        let c = [...copy,temp];
        setArr(c);
    }
    return (<div>
        <h1>all doctors</h1>
        {arr.map((item) => {
            return <Car key={item.id} xxxCar={item} xxxdelete={() => { deleteCar(item.id) }} xxxmove={() => { moveCar(item.id) }} />
        })}
    </div>);
}

export default AllCars;