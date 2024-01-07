import './Person.css'
import React from 'react';

function stammm() {
  alert("dayyyyyyy");
}

function c() {
  alert("hello");
}

export function Person() {
  let name = "yossy";
  let id = "328452529";
  let bornYear = new Date(2000, 10, 10);
  let d = new Date();
  let children = ["yanki", 'malki', "gitty", "itty", "chaya"];
  let imgSrc = "https://www.medico.co.il/wp-content/uploads/2020/06/%D7%93%D7%A8-%D7%9E%D7%99%D7%9B%D7%90%D7%9C-%D7%90%D7%91%D7%90.jpg";

  const getAge = (bornYear) => {
    return d.getFullYear() - bornYear.getFullYear();
  }

  let childElements = children.map((child, index) => (
    <div key={index} onClick={c}>
      {child}
    </div>
  ));

  return (
    <div>
      <h1>person</h1>
      <p>name : {name}</p>
      <p className={id.length !== 9 ? "wrong" : "good"}>id : {id}</p>
      <p>age : {getAge(bornYear)}</p>
      <img src={imgSrc} alt="Person" />
      <br />
      <b className={children.length > 3 ? "bit" : "lot"}>children: {children.join(", ")}</b>
      <input type="button" value="send" onClick={stammm} />
      <div>{childElements}</div>
    </div>
  );
}

