import React from "react";
import { useState,useEffect } from "react";
import { API_ALBUMS } from "../apilinks/ApiLinks";

export const FetchAlbumsData = () => {
    const [data,SetData] = useState([]);
    useEffect(() => {
        fetch(API_ALBUMS)
        .then(response => response.json())
        .then(data => SetData(data))
      },[]);
      const newList = data.map(({userId,id,title})=>{
        return {userId,id,title};
      })
      
      return newList;
}