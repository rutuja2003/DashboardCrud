import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function CreateHome(){

    const[name, setname]=useState("");
    const[email, setemail]=useState("");
    const[number, setnumber]=useState("");
    const[city, setcity]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const empData = {
            id: uuidv4(),
            name,
            email,
            number,
            city
        };
         
     
    fetch("http://localhost:3000/home",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empData)

    }).then((res)=>{
        alert("saved successfully")
    }).catch((err)=>{
        console.log(err.message)

    })
}

    return(
        <>
        <form  onSubmit={handleSubmit}>
            <div classname="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" className="form-control" name="firstname" onChange={e=>setname(e.target.value)} value={name}></input>
            </div>
            
            <div className="form-group">
            <label htmlFor="email">email Address</label>
            <input type="email" className="form-control" name="email" onChange={e=>setemail(e.target.value)}  value={email}></input>
            </div>

            <div className="form-group">
            <label htmlFor="city">city</label>
            <input type="text" className="form-control" name="city" onChange={e=>setcity(e.target.value)}  value={city}></input>
            </div>

            <div className="form-group">
            <label htmlFor="number">number</label>
            <input type="text" className="form-control" name="number" onChange={e=>setnumber(e.target.value)} value={number}></input>
            </div>

            <button type='submit' classname="btn btn-primary" name="create">Add</button>

             
        </form>
        </>
    )
}

export default CreateHome;