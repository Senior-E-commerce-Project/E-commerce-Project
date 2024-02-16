import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom'
import axios from 'axios'
// import $ from 'jquery'
import AllUsers from './componentsAd/AllUsers'
import AllBuyers from './componentsAd/AllBuyers'
import AllSellers from './componentsAd/AllSellers'
import OneBuyer from './componentsAd/OneBuyer'
import OneSeller from './componentsAd/OneSeller'
import OneProductDashBoard from './componentsAd/OneProductDashBoard'


const App = () => {
 const[user,setUser]=useState([])
 const[view,setView]=useState("AllSeller")
 const[single,setSingle]=useState({})
 const[searche,setSearche]=useState("")
 const[product,setProduct]=useState({})

  const changeView=(oneUser,newView)=>{
    setView(newView)
    setSingle(oneUser)
  }
 useEffect(()=>{
  axios.get('http://127.0.0.1:3000/Users/getAll').then((res)=>{
    setUser(res.data)
    console.log("users",res.data)
  })
  .catch((error=>{console.log(error,"could not get Users")}))
 },[])

  const delet=(id)=>{
    axios.delete(`http://127.0.0.1:3000/Users/delete/${id}`).then(()=>{
      console.log("deleted")
    }).catch((error=>{console.log(error,"error")}))
  }
  const search=(name)=>{
    axios.get(`http://127.0.0.1:3000/getOne/${searche}`).then((res)=>{
      console.log("found")
      setUser(res.data)
    }).catch((error=>{console.log(error,"search failed")}))
  }
 const renderView=()=>{
  if(view==="AllUsers"){
    return <AllUsers user={user} changeView={changeView} delet={delet} />
  }
  else if(view==="AllBuyers"){
    return <AllBuyers />
  }
  else if(view==="AllSellers"){
    return <AllSellers   />
  }
else if(view==="OneProductDashBoard"){
  return <OneProductDashBoard/>
}
else if(view==="OneSeller"){
  return <OneSeller/>
}
else if(view==="OneBuyer"){
  return <OneBuyer/>
}
 }

  return (
   
<div>
      <div className='top'>
      <div className='topnav'>
      <div className='home'  ><a href="#home">Home</a></div>
      <div className='AllUsers'><a href="#about" >All Users</a></div>
      <div className='Allbuyers'><a href="#about" >All buyers</a></div>
      <div className='AllSellers'><a href="#about" >All Sellers</a></div>
      <input className='searchbar'type='text' placeholder='Search User' id='search'></input>
      <button className='searchbutton'  >Search</button>
      </div>
      

</div>
<div>
      {renderView()}
      </div> 
    </div>
  )
}
export default App
// ReactDOM.render(<App />, document.getElementById('app'))

// import React from 'react';

// function DashBoard() {
//   return (

//   );
// }

// export default DashBoard;
