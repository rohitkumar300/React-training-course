import React from "react";
import { useState,useEffect } from "react";
import { API_USERS } from "../apilinks/ApiLinks";

export const FetchUserData = () => {
    const [data,SetData] = useState([]);
    useEffect(() => {
        fetch(API_USERS)
        .then(response => response.json())
        .then(data => SetData(data))
      },[]);

      const newList = data.map(({id,name,username,email,address,phone,website,company})=>{
        const fulladdress = address.street + " " + address.suite + " " + address.city + " " + address.zipcode;
        const companyname = company.name;
        return {id,name,username,email,address: fulladdress,phone,website,company: companyname};
      })
      return newList;
}