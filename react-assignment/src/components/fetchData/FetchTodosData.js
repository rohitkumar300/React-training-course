import React from "react";
import { useState,useEffect } from "react";
import { API_TODOS } from "../apilinks/ApiLinks";

export const FetchTodosData = () => {
    const [data,SetData] = useState([]);
    useEffect(() => {
        fetch(API_TODOS)
        .then(response => response.json())
        .then(data => SetData(data))
      },[]);
      const newList = data.map(({userId,id,title,completed})=>{
        return {userId,id,title,completed};
      })
      return newList;
}