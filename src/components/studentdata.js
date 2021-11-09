import React from "react";
import { useState } from "react";

function Student(){
 const [sstudentid, setstudentid] = useState("1001");
  const [sstudentname, setstudentname] = useState("Mahesh");
  const [saddress, setaddress] = useState("PQR building, Mumbai");
  const [scoursename, setcoursename] = useState("Computer Science");
  return (
      <>
      <table className='table'>
          <thead className='table-header'>
              <tr>
                  <th colSpan="4"><h1>...Student Details...</h1></th>
              </tr>
              <tr>
              <th>StudentID</th>
              <th>StudentName</th>
              <th>Address</th>
              <th>CourseName</th>
              </tr>
          </thead>
          <tr className="table-body">
              <td>{sstudentid}</td>
              <td>{sstudentname}</td>
              <td>{saddress}</td>
              <td>{scoursename}</td>
          </tr>
          <tr className="table-body">
          <td><input id="sstudentid" type="text"></input></td>
          <td><input id="sstudentname" type="text"></input></td>
          <td><input id="saddress" type="text"></input></td>
          <td><input id="scoursename" type="text"></input></td>
          </tr>
          <tr className="table-body">
              <td colSpan="4">
                  <button onClick={()=> {
                      setstudentid(document.getElementById("sstudentid").value);
                      setstudentname(document.getElementById("sstudentname").value);
                  setaddress(document.getElementById("saddress").value);
                setcoursename(document.getElementById("scoursename").value);
                  }}
                  type="button" className="cust">Update</button>
                  </td>
                   </tr>
      </table>
      </>

  )};
  
  export default Student;