import React, { useState } from 'react'
import { useEffect } from 'react';

function Backend() {
const [response,setResponse] = useState("");
//const endpoint ="https://jsonplaceholder.typicode.com/users";
useEffect(()=>
  {fetchData()},[])
 async function fetchData(){
 
  try{
      const res =  await fetch("https://jsonplaceholder.typicode.com/users");
      const data =  await res.json();
      setResponse(data);
      console.log(data);
  }
  catch(err){
      setResponse(""); 
      alert(err);
  }
 }
  {
     return (
      <div>
         <h1>hi</h1>
      
      </div>
     )
   }

}



 
  

export default Backend