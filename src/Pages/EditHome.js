import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
function EditHome(){
    const[name, setname]=useState("");
    const[email, setemail]=useState("");
    const[number, setnumber]=useState("");
    const[city, setcity]=useState("");
    const { empid } = useParams();
     ; 
   
    useEffect(()=>{
        
        fetch("http://localhost:3000/home/"+empid).then(data=>{
            return data.json();
        }).then((data)=>{
        
            console.log(data);

            setname(data.name);
            setemail(data.email);
            setnumber(data.number);
            setcity(data.city);
        }).catch((err)=>{
            console.log(err.message)
        })
        }, [empid])
        const updateData=(e)=>{
            e.preventDefault();
          
            console.log(name,email,number,city)
        
    
        const empData={name,email,number,city}
        fetch("http://localhost:3000/home/" + empid,{
            method:"PUT",
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
        <form  onSubmit={updateData}>
            <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" className="form-control" name="firstname" onChange={e=>setname(e.target.value)} value={name} ></input>
            </div>
            
            <div className="form-group">
            <label htmlFor="email">email Address</label>
            <input type="text" className="form-control" name="email" onChange={e=>setemail(e.target.value)} value={email}></input>
            </div>

            <div className="form-group">
            <label htmlFor="city">city</label>
            <input type="text" className="form-control" name="city" onChange={e=>setcity(e.target.value)} value={city} ></input>
            </div>

            <div className="form-group">
            <label htmlFor="number">number</label>
            <input type="text" className="form-control" name="number" onChange={e=>setnumber(e.target.value)} value={number}  ></input>
            </div>

            <button type='submit' className="btn btn-primary" name="create">update</button>

             
        </form>
      
        </>
    )
}
export default EditHome