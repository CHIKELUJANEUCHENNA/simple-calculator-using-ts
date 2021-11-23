import React, {useEffect, FC, useState, useContext} from 'react'
import { useHistory } from "react-router-dom";
import UserContext from './UseContext';
import { Link } from "react-router-dom";


const Login:FC = () =>{

    const [loggedin, setLoggedin] = useState({email: "", password: ""})
    const [isSignIn, setIsSign] = useState(false);
    const check = useContext<any>(UserContext)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLoggedin((prev) => ({...prev, [e.target.name] : e.target.value}))
    }

    const history = useHistory()
    useEffect(()=>{
        if (isSignIn){
            history.push('/home')
        } 
        }, [isSignIn, history])


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        for(let i = 0; i < check.length; i++) {
            if(check[i].email === loggedin.email) {
                setIsSign(true)
                break
            } else {
                setIsSign(false)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="signupStyle loginStyle">
            {/* <h1>{check[0].email}</h1> */}
            <p>Welcome login to continue</p>
            <label className="labelStyle">Email:</label>
            <input 
            className="inputStyle"
            type="email" 
            name="email" 
            placeholder="email" 
            value={loggedin.email}  
            onChange={handleChange}
            required/>


            <label className="labelStyle">Password:</label>
            <input 
            className="inputStyle"
            type="password" 
            name="password" 
            placeholder="password" 
            value={loggedin.password} 
            onChange={handleChange}
            required />

            <input 
            type="submit" 
            className="submitStyle inputStyle"/>
            <p>New User:
            <Link to="/">SignUp</Link>
            </p>
        </form>
    )
}

export default Login
