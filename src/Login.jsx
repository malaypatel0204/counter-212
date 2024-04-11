import React, { useState } from 'react'

export const Login = () => {

    const [data,setData] = useState({

        FirstName : "",
        LastName : "",
        Email : "",
        Password : "",
        ConfirmPassword : "",

    })

    const handleSubmit = (e) =>{
         e.preventDefault()
         console.log(data);
    }

    const handleInput = (e) =>{

        setData({...data,[e.target.name]: e.target.value})
    }    
    // const FirstName = (e)=>{
    //     setData({...data,"FirstName":e.target.value})
        
    // }
    
    // const LastName = (e)=>{
    //     setData({...data,"LastName":e.target.value})
        
    // }
    
    // const Email = (e)=>{
        
    //     setData({...data,"Email":e.target.value})
    // }
    
    // const Password =(e)=>{
    //     setData({...data,"Password":e.target.value})

    // }

    // const ConfirmPassword = (e) =>{
    //     setData({...data,"ConfirmPassword":e.target.value})

    // }


  return (


    <form onSubmit={handleSubmit}> 
        <label htmlFor="FirstName">FirstName</label>
        <input type="text" name="FirstName" id="FirstName" onChange={handleInput}/> 

        <label htmlFor="LastName">LastName</label>
        <input type="text" name="LastName" id="LastName" onChange={handleInput}/>

        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" id="Email" onChange={handleInput}/>

        <label htmlFor="Password">Password</label>
        <input type="text" name="Password" id="Password" onChange={handleInput}/>

        <label htmlFor="ConfirmPassword">ConfirmPassword</label>
        <input type="text" name="ConfirmPassword" id="ConfirmPassword" onChange={handleInput}/>

        <input type="submit" value="Login" />
    </form>
  )
}
