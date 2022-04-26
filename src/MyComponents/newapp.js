import React from 'react'
import UserDetails from './MyComponents/UserDetails.jsx'
import SearchBar from './MyComponents/SearchBar.jsx'
import Pagenation from './MyComponents/Pagenation.jsx'
import "./MyComponents/app.css";
// import data from "./MyComponents/SampleData.json";

const App = () => {
    return (
        <div>
            <h1 className="heading">ADMIN-UI</h1>
            <SearchBar />

            {/* {
                data.map((user) => {
                    return (
                        <UserDetails id={user.id} user={user} />
                    )
                })
            } */}
            <UserDetails />
            <Pagenation />
        </div>
    )
}

export default App;




