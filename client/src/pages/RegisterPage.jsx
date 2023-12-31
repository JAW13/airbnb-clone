import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';




export default function RegisterPage(){
    const[name, setName] =useState('');
    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');
    function registerUser (ev){
        ev.preventDefault()
        axios.get('/test')     
    }
    return(
        <div className=" grow flex items-center justify-around">
            <div className="">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto " onSubmit={registerUser}>
            <input type="text" 
            placeholder="Joaquin Arancibia" 
            value={name} 
            onChange={ev=>setName(ev.target.value)} />
            <input type="email" 
            placeholder="your@email.com" 
            value={email}
            onChange={ev=>setEmail(ev.target.value)}/>
            <input type="password" 
            placeholder="password" 
            value={password} 
            onChange={ev=>setPassword(ev.target.value)}/>
            <button className="bg-primary p-2 w-full rounded-full text-white">Register</button>
            <div className="text-center py-2 text-gray-500">
                Already a member?
                <Link className="underline text-black" to={'/login'}> Login</Link>
            </div>
        </form>
           </div>
        </div>
    
    );
}