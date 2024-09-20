
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [user,setUser]=useState({});
  const [list,setList]=useState([]);

    useEffect(()=>{
      let listData = JSON.parse(sessionStorage.getItem('user'));
      if (listData) {
        setList(listData); 
      } else {
        setList([]);
      }
    },[])
  let inputHandle=(e)=>{
    let {name,value}=e.target;
   setUser({...user,[name]:value})

  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    let newList=[...list,user]
    sessionStorage.setItem('user',JSON.stringify(newList))
    setList(newList)
    setUser({})
  }
  console.log(list)
  let deletHand=(i)=>{
    list.splice(i,1)
    let newList=[...list]
    sessionStorage.setItem('user',JSON.stringify(newList))
    setList(newList)  }
  

return(
  <>
  <h2>sesion storage</h2>
       <form onSubmit={handleSubmit} >
        <table align="center">
        <div>
          <td>Name:</td>
          <input
            type="text"
            name="name"
            value={user.name?user.name:""}     
            onChange={(e)=>inputHandle(e)}
            required
          />
        </div>
        <div>
          <td>Email:</td>
          <input
            type="email"
            name="email"
            value={user.email?user.email:""}
            onChange={(e)=>inputHandle(e)}
            required
          />
        </div>
        <div>
          <td>password:</td>
          <input
            type="password"
            name="password"
            value={user.password?user.password:""}
            onChange={(e)=>inputHandle(e)}
            required
          />
        </div>
        <div>
          <td>Phone:</td>
          <input
            type="text"
            name="Phone"
            value={user.Phone?user.Phone:""}
            onChange={(e)=>inputHandle(e)}
            required
          />
        </div>
        <div>
          <td>Address:</td>
          <input
            type="text"
            name="address"
            value={user.address?user.address:""}
            onChange={(e)=>inputHandle(e)}
            required
          />
        </div>
        <button type="submit" id='btnc' onClick={handleSubmit}>Submit</button>
        </table>
      </form>
  <br/><br/>
  <table border={1} align="center">
    <tbody>
      <tr>
        <td>name</td>
        <td>email</td>
        <td>address</td>
        <td>Phone</td>
        <td>Action</td>
      </tr>
      {list.map((val,i)=>{
        console.log(val)
        return(
          <tr key={i}>
         <td>{val.name}</td>
        <td>{val.email}</td>
        <td>{val.address}</td>
        <td>{val.Phone}</td>
        <td><button onClick={()=>deletHand(i)}>delete</button></td>
       </tr>
        )
       
})}
    </tbody>
  </table>
  </>
)
}

export default App
