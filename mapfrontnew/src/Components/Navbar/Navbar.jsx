import React from 'react'


export const Navbar = () => {
  return (
    <div style={{
        backgroundColor:'greenyellow',
        textAlign:"center",
        padding:"10px"
    }}>
    <ul style={{
        display:"inline-flex",
        listStyle:"none",
        padding:"10px"
    }}>
        <li style={{
             padding: "10px",
             marginLeft: "20px"
        }}><a style={{
          textDecoration:"none",
          color:"white"
        }} href='/'>Home</a></li>

        <li style={{
             padding: "10px",
             marginLeft: "20px"
        }}><a style={{
          textDecoration:"none",
          color:'white'
        }} href='Signin'>Login</a></li>

        <li style={{
             padding: "10px",
             marginLeft: "20px"
        }}><a style={{
          textDecoration:"none",
          color:"white",
        }} href='Signup'>SignUp</a></li>
    </ul>
       
</div>
  )
}
