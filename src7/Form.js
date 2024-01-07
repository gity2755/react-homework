import { useState } from "react";
import "./Bags.css";
import {bags} from "./Bags.js"

// let  bags=Bags.bags
// let setBags=Bags.setBags
const Form = () => {
    let [myErrors, setMyErrors] = useState([{}])
    let newBag = {};
    // let [bags, setBags] = useState([{
    //     code: "", name: "", price: 0, cells: 0, email: ""
    // }])
    function ValidateEmail(mail) {
        let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i
        if (re.test(mail)) {
            return true;
        }
        return false;
    }
    const change = (e) => {

        let inputvalue = e.target.value
        let inputType = e.target.type
        let inputName = e.target.name
        if (inputType == "number") {
            inputvalue = +inputvalue
        }
        newBag = { ...newBag, [inputName]: inputvalue }
    }


    const validate = () => {
        let err = {}
        if (!newBag.code)
            err.code = "קוד הוא שדה חובה"
        else 
        if (newBag.code.length != 3)
            err.code = "קוד חיב להכיל 3 ספרות"
        console.log("id " + newBag.code);
        console.log("err id " + err.code);
        if (newBag.price < 50 || newBag.price > 400)
            err.price = " מחיר התיק חייב להיות בטווח בין  50  ל 400 "
        if (newBag.cells <= 0)
            err.cells = "מספר התאים בתיק חייב להיות לפחות אחד"
        // if (!(ValidateEmail(newBag.email)))
        //     err.email = "חשבון אימייל לא תקין"
        return err;
    }
    const print=()=>{
        bags.forEach(element => {
            
        });
        <ol>
                {bags.map((item, index) =>
                    <li key={index}>
                        code:  {item.code}
                        name:  {item.name}
                        price:  {item.price}
                        cells:  {item.cells}
                        email:  {item.email}
                    </li>
                )}
            </ol>
    }

    const sendForm = (e) => {
        e.preventDefault();
        let result = validate();
        let errors = Object.keys(result)
        console.log(errors);
        if (errors.length === 0) {
            let copy = [...bags, newBag]
            bags=copy
        }

        else
            setMyErrors(result)
       
    }

    return (
        <>
            <form onSubmit={sendForm} style={{ display: "flex", flexDirection: 'column', alignItems: "center", fontSize: "20px", backgroundColor: "pink" }}>
                <label>code</label>
                <input type="text" className={myErrors.code ? "error-input" : ""}
                    name="code" onBlur={change} />
                {myErrors.code && <span className="error-message">{myErrors.code}</span>}

                <label>name</label>
                <input type="text" className={myErrors.name ? "error-input" : ""}
                    name="name" onBlur={change} />
                {myErrors.name && <span className="error-message">{myErrors.name}</span>}

                <label>price</label>
                <input type="number" className={myErrors.price ? "error-input" : ""}
                    name="price" onBlur={change} />
                {myErrors.price && <span className="error-message">{myErrors.price}</span>}

                <label>cells</label>
                <input type="number" className={myErrors.cells ? "error-input" : ""}
                    name="cells" onBlur={change} />
                {myErrors.cells && <span className="error-message">{myErrors.cells}</span>}

                <label>email</label>
                <input type="text" className={myErrors.email ? "error-input" : ""}
                    name="text" onBlur={change} />
                {myErrors.email && <span className="error-message">{myErrors.email}</span>}
                <input type="submit" />
           </form>
           {
           <ol>
                {bags.map((item, index) =>{
             if(index!=0) return(
                    <li key={index}>
                       
                        code:  {item.code    }
                        name:  {item.name}
                        price:  {item.price}
                        cells:  {item.cells} 
                        email:  {item.email}
                    </li>)}
                )}
            </ol>
}
        </>
    );
}

export default Form;