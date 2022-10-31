import React from "react";
import { useState,useEffect } from "react";
import { API_PHOTOS } from "../apilinks/ApiLinks";

export const FetchPhotosData = () => {
    const [data,SetData] = useState([]);
    useEffect(() => {
        fetch(API_PHOTOS)
        .then(response => response.json())
        .then(data => SetData(data))
      },[]);
      const newList = data.map(({albumId,id,title,url,thumbnailUrl})=>{
        return {albumId,id,title,url,thumbnailUrl};
      })
      
      return newList;
}