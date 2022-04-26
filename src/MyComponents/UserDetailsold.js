import React, { useEffect, useState } from 'react'
import './Users.css'

const UserDetailsold = ({ users, allSelected, onDelete}) => {
  
  const [selected, setSelected] = useState(false);
  
  useEffect(()=>{
    setSelected(allSelected)
  },[]);

  function handleChange(e) {
    setSelected(!selected);
    e.target.checked = !selected;
    console.log(`${e.target.id}-- ${e.target.checked}`);
  }

 

  return (
    <div className="container2">
      <table>
        
          <thead>
            <tr>
              <th style={{ width: "5%" }}><input type="checkbox" className="checkbox" id="SelectAll" name="isAllSelected" onChange={handleChange} checked={allSelected} value="isAllSelected" /></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          
        <tbody>
          {users.map((user) => {
            return(
            <tr key={user.id}>
            <td id={`checkbox${user.id}`} style={{ width: "5%" }}><input type="checkbox" className="checkbox" name={`checkbox${user.id}`} value={`checkbox${user.id}selected`} onChange={handleChange} /></td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td><button>Delete</button></td>
          </tr>)
            })
          }
        
        </tbody>
      </table>
    </div>


  )
}

export default UserDetailsold
