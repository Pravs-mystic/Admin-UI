import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Edit, DeleteOutline } from "@mui/icons-material";
import "./userDetails.css";
import data from "./SampleData.json";


const userDetails = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'NAME', width: 190 },
    { field: 'email', headerName: 'EMAIL', width:200 },
    { field: 'role', headerName: 'ROLE', width: 170 },
    {
      field: 'actions', headerName: 'ACTIONS', width: 150, renderCell: (params) => {
        return (
          <>
            <Edit className="editusers" />
            <DeleteOutline className="deleteusers" />

          </>

        )
      }
    }


  ];

  const rows = '['+

    
            data.map((user) => {
      return(`

        
        { id:  ${user.id} , username:  ${user.name} , email:  ${user.email} , role:  ${user.role}  },
        
 ` )}
      
      
             )    + ']'
    ;
  
    return (
      <div className="datagrid" >
      <DataGrid
        rows={rows} disableSelectionOnClick disableColumnMenu
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection 
      />
    </div>
  )
}


export default userDetails
