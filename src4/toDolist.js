import { useState } from "react"

const ToDoList = () => {
    let [arr, setArr] = useState([]);
    let [list, setList] = useState([
        { id: "1", name: "buy", level: 1 }, { id: "2", name: "go", level: 2 }, { id: "3", name: "jdaksj", level: 3 }]);
    let [num, setNum] = useState();
    let [id1, setId1] = useState()
    let [name1, setName1] = useState()
    let [level1, setLevel1] = useState()
    function changeId(e) {
        setId1(e.target.value)
    }
    function changeName(e) {
        setName1(e.target.value)
    }
    function changeLevel(e) {
        setLevel1(e.target.value)
    }
    function deleteItems(item) {
        let index = item.target.index
        let copy = [...list]
        copy.splice(index, 1)
        setList(copy)
    }
    function didItem(e) {
        // console.log("ccc"+e.target.id);
        console.log("id: "+e);
        let copy1=[...list]
      let c=copy1.filter(item=>item.id==e);
      let copy2=[...arr,c]
      setArr(copy2)
        console.log(arr);
    }
    function addToList() {
        let copy = [...list, { id: id1, name: name1, level: level1 }];
        setList(copy);
        // console.log(document.getElementById("inp").value);
    }
    function changeList(e) {
        let copy=[...list]
        copy=copy.filter(toDo=>toDo.level==e.target.value)
        console.log(copy);
        setList(copy)
    }


    return (
        <div>
            <input type="text" placeholder="id" onChange={changeId} />
            <input type="text" placeholder="name" onChange={changeName} />
            <input type="number" placeholder="level" onChange={changeLevel} />
            <input type="button" value="add" onClick={addToList} />
            <input type="text" placeholder="search" onChange={changeList} />
            <ol>
                {list.map((item, index) =>
                    <li key={index}>
                        id:  {item.id}
                        name:  {item.name}
                        level:  {item.level}
                        <input type="button" value="delete" onClick={deleteItems} />
                        <input type="button"  onClick={()=>{didItem(item.id)}} />
                    </li>
                )}
            </ol>

            <ol>
                {arr.map((item, index) =>
                    <li key={index}>
                        id:  {item.id}
                        name:  {item.name}
                        level:  {item.level}
                     
                    </li>
                )}
            </ol>
        </div>
    )
}
export default ToDoList;