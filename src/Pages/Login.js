import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login(){
    const [username, setUsername]= useState('');
    const [password, setPassword]=useState('');
    const navigate=useNavigate()
    const getData =async (e) => {
      e.preventDefault();
      try{
        const response=await fetch('http://localhost:3000/registration');
        if(!response.ok){
          throw new Error('network response was not ok');

        }
        const data = await response.json(); 
        console.log ('Data form server: ',data );
        const user = data.find((a) => a.username === username && a.password ===password);
        console.log('Found User: ',user);
        if(user){
          alert("login successful");
          navigate('/Dashboard');
        }else{
          alert("user not found");
        }
      }catch(error){
        console.error('Error:',error);
        alert('something Went Wrong');

      }
    };
 
    return(

        <>
        <div className="card mt-5" style={{width:"50%" , display:"block", margin:"auto", padding:"20px"}} >
        <form onSubmit={getData}>
            <h1 className='center'>Login Form</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputemail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputemail1" aria-describedby="emailHelp" onChange={(a)=>setUsername(a.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(a)=>setPassword(a.target.value)}/>
  </div>
   
  <button type="submit" className="btn btn-primary">Submit</button>
  <p>Dont have Account <Link to="/Registration">Register Here</Link></p>
</form>
</div>
        </>
    );
}export default Login;