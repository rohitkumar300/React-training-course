import React from "react";
import { useState,useEffect } from "react";
import { API_POSTS } from "../apilinks/ApiLinks";

export const FetchPostsData = (keyVal) => {
    const [data,SetData] = useState([]);
    useEffect(() => {
        fetch(API_POSTS)
        .then(response => response.json())
        .then(data => SetData(data))
      },[]);
      const newList = data.map(({userId,id,title,body})=>{
        return {userId,id,title,body};
      })
      
      return newList;
}