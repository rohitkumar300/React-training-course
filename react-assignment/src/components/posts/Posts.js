import React from "react";
import { FetchPostsData } from "../fetchData/FetchPostsData";
import "./Posts.css";
import Dropdown from "react-bootstrap/Dropdown";
import DataTable from "react-data-table-component";

const Posts = () => {
  // console.log(props.userIdVal)
  var data = FetchPostsData();
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
      name: "Body",
      selector: (row) => row.body,
    },
    {
      name: "Actions",
      cell: row =>  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={`/users/${last_segment}/posts/${row.id}/comments`}>Comments</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
    }
  ];
  return (
    <div>
      <DataTable
        title="Posts"
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

export default Posts;
