import React, { useEffect, useState } from 'react'
import './App.css' 
import two from './two.jpg' 
import one from './one.avif'
const App = () => {  
  let[arr,setarr]=useState([]) 
  let[sel,setsel]=useState(true)
  useEffect(()=>{
    let arr=[
      { 
        img:one,
        name:"naruto",
        doller:13,
        type:'received'
      } 
      , 
      { 
        img:two,
        name:"minzo",
        doller:13,
        type:'send'
      } 

    ]  
    setarr(arr)
    
  }) 
  let sell=()=>{
setsel(!sel)
  }
  return (
    <div className='maincom'> 
    <div className='anad'>  
    <h3>Last transactions</h3> 
    <p style={{
      color:"blue"
    }} 
    onClick={()=>sell()}>Sell all</p>
    </div>  
    {
    <div style={{
      height:"40vh",
      width:"100%",
      display:"flex", 
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#FFFFFF",
      margin:"10px"
    }}>  
    {sel && 
      arr.map((val,ind)=>(
        <div style={{
          display:"flex",
          justifyContent:"space-evenly",
          alignItems:"center",
          margin:"20px",
          height:"30vh",
          width:"80%", 
          marginTop:"40px"
        }}>    
        <img src={val.img} alt='nothing found' height="80px" width="80px"  style={{
          borderRadius:"50%",
        }}></img>
        <p>{val.name}</p>
        <p>{val.doller} dollers</p> 
        <p style={{
          color:ind===1?"red":"green"
        }}>{val.type}</p>

        </div>
      ))
    } 

    </div>}

    </div>
  )
}

export default App