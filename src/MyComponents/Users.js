import React, { useState } from 'react'
import './Users.css'
import UserDetailsold from './UserDetailsold.js';
import { users } from "./sampledata.js";

const Users = () => {

  // let users_api = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  // const UpdateUsers = async () => {
  //   let userData = await fetch(users_api);
  //   let parsed_userData = await userData.json();
  //   setUsers(parsed_userData);

  // }

  // let userdata = users;
  const [userdata, setUserdata] = useState(users);
  const [inputText, setInputText] = useState("");
  const keys = ["name","email","role"];

const search= (data)=>{
  return data.filter((item)=> 
    keys.some((key) => item[key].toLowerCase().includes(inputText))
  );
}

  const onDelete = (user) => {
    console.log("delete", user);
    setUserdata( userdata.filter((item) => item !== user));
  }

  // Selecting/DeSelecting All checkboxes
  const [allSelected, setallSelected] = useState(false)

  function handleChange(e) {
    console.log(`Select all is ${allSelected}`);
    setallSelected(!allSelected);

  }

  return (
    <>
      <h1 className="heading">ADMIN-UI</h1>
      <div className="box">
        <div className="container1">
          <input id="searchBar" type="text" placeholder="Search by Name, Email or Role..." onChange={e => setInputText(e.target.value)} />
          <button className="searchbtn">Search</button>
        </div>
        <div className="container2">
          <UserDetailsold users={search(userdata)} allSelected={allSelected} onDelete={onDelete}/>
        </div>


      </div>

      <div className="container3">
        <button id="DeleteSelected-btn">Delete Selected</button>
        <div className="pagination">
          <a href="/">&laquo;</a>
          <a href="/">1</a>
          <a className="active" href="/">2</a>
          <a href="/">&raquo;</a>
        </div>
      </div>

   
    </>
  )
}

export default Users
