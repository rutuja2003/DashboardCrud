import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
 

 
const Home=()=>{
  const navigate =useNavigate();
  const[homeData,sethomeData]=useState([])
       useEffect(()=>{
        fetch('http://localhost:3000/home').then((res)=>{
          return res.json();
        }).then((response)=>{
          sethomeData(response)
          console.log(response);
        }).catch((err)=>{
          console.log(err.message);
        })
       })

       

       const edit=(id)=>{
        navigate('/Dashboard/EditHome/'+id)
       }

       const deleteEntry = (id) => {
        fetch(`http://localhost:3000/home/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => {
            if (res.ok) {
                sethomeData(homeData.filter(item => item.id !== id));
                alert('Deleted successfully');
            } else {
                throw new Error('Failed to delete entry');
            }
        })
        .catch((err) => {
            console.error('Delete error:', err.message);
            alert('Error deleting entry: ' + err.message);
        });
    };

    return(
        <>
        <Link to="/Dashboard/CreateHome" class="btn btn-primary">Create</Link>
        <div className="table-responsive">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">sr no</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">city</th>
      <th scope="col">number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    { homeData && homeData.map((item,index)=>(
        <tr key={item.id}>
        <th scope="row">{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.city}</td>
        <td>{item.number}</td>
        <td><button className="btn btn-primary" onClick={()=>{edit(item.id)}}>Edit</button></td>
        <button className="btn btn-danger" onClick={() => {deleteEntry(item.id)}}>Delete</button>
      </tr>

    ))}
    

  </tbody>
</table>
</div>
        </>
    );
};
export default Home;