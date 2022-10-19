import React from "react";
import "./Comments.css";
import { FetchCommentsData } from "../fetchData/FetchCommentsData";
import DataTable from "react-data-table-component";

const Comments = () => {
  var data = FetchCommentsData();
  var currentUrl = window.location.href;
  var url_array = currentUrl.split('/') 
  var last_segment = parseInt(url_array[url_array.length-2]); 
  if(last_segment)
  {
    const filtered2 = data.filter(obj => {
      return  obj.postId === last_segment;
    });
    data = filtered2
  }
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
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Body",
      selector: (row) => row.body,
    },
  ];
  return (
    <div>
      <DataTable
        title="Comments"
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

export default Comments;
