import React from "react";
import "./Photos.css";
import { FetchPhotosData } from "../fetchData/FetchPhotosData";
import DataTable from "react-data-table-component";

const Photos = () => {
  var data = FetchPhotosData();
  var currentUrl = window.location.href;
  var url_array = currentUrl.split('/') 
  var last_segment = parseInt(url_array[url_array.length-2]); 
  if(last_segment)
  {
    const filtered2 = data.filter(obj => {
      return  obj.albumId === last_segment;
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
      name: "Url",
      selector: (row) => row.url,
    },
    {
      name: "ThumbnailUrl",
      selector: (row) => row.thumbnailUrl,
    },
  ];
  return (
    <div>
      <DataTable
        title="Photos"
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

export default Photos;
