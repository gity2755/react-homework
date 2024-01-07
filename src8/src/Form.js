import { useState } from "react";
import "./Bags.css";
import bags from "./Bags";
const Form = () => {
    let [bags,setBags]=useState({
        id:"",name:"",price:0,cells:0,email:""})     
    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
            return (true)
        }
        return (false)
    }

    let [myErrors, setMyErrors] = useState({})
    const validate = () => {
        let err = {}
        if (!bags.id)
            err.id = "תז הוא שדה חובה"
        else if (bags.id.length != 9)
            err.id = "תז חיב להכיל 9 ספרות"
        if (bags.price < 50 || bags.price > 400)
            err.price = " מחיר התיק חייב להיות בטווח בין  50  ל 400 "
        if (bags.cells < 1)
            err.cells = "מספר התאים בתיק חייב להיות לפחות אחד"
        if (!validateEmail(bags.email))
            err.email = "חשבון אימייל לא תקין"
            

    }
    const change = (e) => {
        let inputvalue = e.target.value
        let inputType=e.target.type
        let inputName=r.target.name
        if(inputType=="checkbox")
           inputvalue=e.target.checked
        else if(inputType=="number")
        inputvalue= +inputvalue
    let copy={...bags,[inputName]:inputvalue}
    setBags(copy)
    }
    const sendForm=(e)=>{
        e.preventDefault();
        let result=validate();
        if(Object.keys(result).length==0)
           alert(JSON.stringify(bags))
        else 
        setMyErrors(result)
   
    }
    return (
        <>
            <form onSubmit={sendForm} style={{display:"flex",flexDirection:'column',alignItems:"center",fontSize:"20px",backgroundColor:"pink"}}>
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
                <input type="email" className={myErrors.email ? "error-input" : ""}
                    name="email" onBlur={change} />
                {myErrors.email && <span className="error-message">{myErrors.email}</span>}
                <input type="submit" />
            </form>
        </>
    );
}

export default Form;