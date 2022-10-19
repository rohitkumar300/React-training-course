import React from "react";
import { useState,useEffect } from "react";
import { API_COMMENTS } from "../apilinks/ApiLinks";

export const FetchCommentsData = () => {
    const [data,SetData] = useState([]);
    useEffect(() => {
        fetch(API_COMMENTS)
        .then(response => response.json())
        .then(data => SetData(data))
      },[]);

      const newList = data.map(({postId,id,name,email,body})=>{
        return {postId,id,name,email,body};
      })
      
      return newList;
}