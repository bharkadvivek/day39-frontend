import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup(){

    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const handleSubmit=()=>{
        console.log(email,password)
        axios.post('http://localhost:5000/signup', {email:email, password:password})
        .then(res =>{
            console.log(res.data)
            if(res.data.code === 200){
                alert("Sign up successful")
            }else{
                alert('Error')
            }
        }).catch(err =>{
            console.log(err)
        })
    }



    return(<>
        <h1 className="center">Sign-up</h1>
        <div className="outcard">
            Email 
            <input 
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            value={email}
            className="inputs" type="email"/><br/><br/>
            Password 
            <input 
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            value={password}
            className="inputs" type="password"/> <br/><br/>
            <button 
            onClick={handleSubmit}
            className="btns">Submit</button>
            <Link  style={{textAlign:'center', display:'block', marginTop:'5px'}} to ={'/signin'}>Sign In</Link>
        </div>
        </>
    )
}

export default Signup;