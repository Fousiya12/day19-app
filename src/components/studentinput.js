import React, { useState } from "react";
import './studentinput.css';

const StudentInputs = () => {


    const [userRegistration, setuserRegistration] = useState({
        studentid:"",
        studentname:"",
        address:"",
        coursename:""
     });

     const [records, setRecords] = useState([]);

     const handleinput = (event) => {
         const name = event.target.name;
         const value = event.target.value;
         console.log(name,value);

         setuserRegistration({...userRegistration,[name]:value})
        }
        const handlesubmit =(event) => {
            event.preventDefault();
            const newRecord = {...userRegistration, id : new Date().getTime().toString()}
            setRecords([...records , newRecord]);
            console.log(records);

            setuserRegistration({studentid:"",studentname:"",address:"",coursename:""});
        }
    return (
        <>
        <form action="" onSubmit={handlesubmit}>
           <div>
                <label htmlFor="studentid">StudentID</label>
                <input type="text" value={userRegistration.studentid}
                onChange={handleinput}
                 name="studentid" id="studentid"/>
            </div>
            <div>
                <label htmlFor="studentname">StudentName</label>
                <input type="text" value={userRegistration.studentname}
                onChange={handleinput}
                name="studentname" id="studentname"/>
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input type="text" value={userRegistration.address}
                onChange={handleinput}
                 name="address" id="address"/>
            </div>
            <div>
                <label htmlFor="coursename">CourseName</label>
                <input type="text" value={userRegistration.coursename}
                onChange={handleinput}
                name="coursename" id="coursename"/>
            </div>

            <button type="submit">Submit</button>
        </form>
        <div>
            {
                records.map((curElem)=>{
                    const {id , studentid, studentname,address,coursename}=curElem;
                    return(
                        <div className="showDataStyle"key={id}>
                            <p>{studentid}</p>
                            <p>{studentname}</p>
                            <p>{address}</p>
                            <p>{coursename}</p>
                            </div>
                    )
                    })
            }
        </div>
        </>
        
    )
}

export default StudentInputs;