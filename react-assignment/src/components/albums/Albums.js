import React from "react";
import { FetchAlbumsData } from "../fetchData/FetchAlbumsData";
import "./Albums.css";
import Dropdown from "react-bootstrap/Dropdown";
import DataTable from "react-data-table-component";

const Albums = () => {
  var data = FetchAlbumsData();
  var currentUrl = window.location.href;
  var url_array = currentUrl.split('/') 
  var last_segment = parseInt(url_array[url_array.length-2]); 
  if(last_segment)
  {
    const filtered2 = data.filter(obj => {
      return  obj.userId === last_segment;
    });
    data = filtered2
  }
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Actions",
      cell: row=> <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={`/users/${last_segment}/albums/${row.id}/photos`}>Photos</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
    }
  ];
  return (
    <div>
      <DataTable
        title="Albums"
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

export default Albums;
