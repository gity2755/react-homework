import { useEffect, useState } from "react";
import Article from "./Article";
import './Gallery.css' ;
import SearchBar from "./SearchBar";
const Gallery = () => {
    let[arr,setArr]=useState([]);
    const removeArticle=(id)=>{
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
    const goBringFromServerById=(userId)=>{
        fetch("https://jsonplaceholder.typicode.com/posts?userId="+userId)
        .then((resp)=>{
            console.log(resp)
            return resp.json();
        }).then(data=>{
            console.log(data)
            setArr(data)
        }).catch(er=>console.log(er))
    }
    const goBringFromServer=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resp)=>{
            console.log(resp)
            return resp.json();
        }).then(data=>{
            console.log(data)
            setArr(data)
        }).catch(er=>console.log(er))
    }
    useEffect(()=>{goBringFromServer()},[])
    return ( <>
        <h1>all articles</h1>
        <SearchBar label="חפש פה מה שאתה רוצה" searchFunc={goBringFromServerById}/>

        <div className="all-articles">
            {arr.map(item=>{return <Article key={item.id} art={item} removeFunc={removeArticle}/>})}
        </div>
        </>
     );
}
 
export default Gallery;