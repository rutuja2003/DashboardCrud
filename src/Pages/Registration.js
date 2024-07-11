import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
 
import { useState } from 'react';
function Registration(){

    const [firstname, setfirstname]= useState('');
    const [lastname, setlastname]=useState('');
    const [email, setemail_Id]= useState('');
    const [contact, setcontact]=useState('');

    const [username, setUsername]= useState('');
    const [password, setpassword]=useState('');
    // const [empdata, setempdata]=useState('');


     

        
    
    const postData=(e)=>{
        e.preventDefault();
        console.log(firstname,lastname,email,contact,username,password);
        const empdata={firstname,lastname,email,contact,username,password};
        fetch('http://localhost:3000/registration',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(empdata)
        }).then((result)=>{
         alert("saved Data");
       }).catch(error=>{
        console.log(error.message)
    })
    }
    
    return(
        <>
        <div className="card mt-5" >
        <form onSubmit={postData}>
            <h1 className='center'>Registration Form</h1>
            <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Firstname</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>setfirstname(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Lastname</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>setlastname(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">email_Id</label>
    <input type="email" className="form-control" id="exampleInputPassword1" onChange={(e)=>setemail_Id(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Contact</label>
    <input type="number" className="form-control" id="exampleInputPassword1" onChange={(e)=>setcontact(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputemail1" className="form-label">User name</label>
    <input type="text" className="form-control" id="exampleInputemail1" aria-describedby="emailHelp" onChange={(e)=>setUsername(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setpassword(e.target.value)}/>
  </div>

   
  <button type="submit" className="btn btn-primary">Submit</button>
  <p>Already have Account <Link to="/">Login Here</Link></p>
</form>
</div>
        </>
    );
}
export default Registration;