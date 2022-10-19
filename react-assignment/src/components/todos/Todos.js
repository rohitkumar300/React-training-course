import React from "react";
import "./Todos.css";
import { FetchTodosData } from "../fetchData/FetchTodosData";
import DataTable from "react-data-table-component";

const Todos = () => {
  var data = FetchTodosData();
  
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
      name: "Completed",
      selector: (row) => (row.completed ? "Completed" : "Pending"),
    },
    
  ];
  return (
    <div>
      <DataTable
        title="Todos"
        pagination
        columns={columns}
        data={data}
        fixedHeader
        fixedHeaderScrollHeight="500px"
        selectableRows
selectableRowsHighlight
highlightOnHover
      />
      {/* {data.map((user, key) => {
        return (
          <ul key={key}>
            <li>{user.id}</li>
            <li>{user.title}</li>
            <li>{user.completed ? "Completed" : "Pending"}</li>
          </ul>
        );
      })} */}
    </div>
  );
};

export default Todos;
