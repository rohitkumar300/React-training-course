import React from "react";
import { FetchUserData } from "../fetchData/FetchUserData";
import Dropdown from "react-bootstrap/Dropdown";
import DataTable from "react-data-table-component";
import "./Users.css";

const Users = () => {
  
  const data = FetchUserData();

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Website",
      selector: (row) => row.website,
    },
    {
      name: "Company",
      selector: (row) => row.company,
    },
    {
      name: "Actions",
      cell: (row) => <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Options
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href={`/users/${row.id}/todos`}>Todos</Dropdown.Item>
        
        <Dropdown.Item href={`/users/${row.id}/posts`} >Posts</Dropdown.Item>
        
        <Dropdown.Item href={`/users/${row.id}/albums`}>Albums</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    },
  ];
  return (
    <div>
      <DataTable
        title="Users"
        pagination
        columns={columns}
        data={data}
        fixedHeader
        fixedHeaderScrollHeight="500px" 
selectableRows
selectableRowsHighlight
highlightOnHover
      />
      
      
    </div>
  );
};

export default Users;
