import React, { useState, FC} from 'react'
import { Link, Route } from "react-router-dom"

// interface ISignUp {
//     firstName: string,
//     lastName: string,
//     email: string,
//     password: string,
//     phoneNumber: stringq !1
//     clickHandler: () => void;
// }

const SignUp:FC = () => {
    
    const [user, setUser] = useState<any>({})
    const [userList, setUserList] = useState<{}[]>([])

    const clickHandler = (e:React.ChangeEvent<HTMLInputElement>)  => {
        const name = e.target.name
        const value  = e.target.value
        setUser((prev:string|any)=>({...prev, [name]: value}))
       
     }

    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setUserList((prev:string|any)=>([...prev, user]))
        localStorage.setItem('sign_form', JSON.stringify({userList}))
        setUser({
            firstname:'',
            lastname:'',
            email: '',
            password: '',
            phoneNumber: ''
        })
        
    }
    return (
        <div>
            <div className="signupStyle">
            <p>SignUp page</p>
                <form onSubmit={handleSubmit} >
                    <label>First Name: </label>
                    <input 
                    className="inputStyle" 
                    name ="firstname"  
                    type="text" 
                    placeholder="first name" 
                    value={user.firstname || ""} 
                    onChange={clickHandler} required/>
                    <br />

                    <label>Last Name: </label>
                    <input 
                    className="inputStyle" 
                    name= 'lastname' 
                    type="text" 
                    placeholder="last name" 
                    value={user.lastname || ''} 
                    onChange={clickHandler} 
                    required/>
                    <br />

                    <label>Email: </label>
                    <input 
                    className="inputStyle" 
                    name='email' type="email" 
                    placeholder="email" 
                    value={user.email || ""} 
                    onChange={clickHandler}
                    required/>
                    <br />

                    <label>Password: </label>
                    <input 
                    className="inputStyle" 
                    name='password' 
                    type="password" 
                    placeholder="password" 
                    value={user.password || ""} 
                    onChange={clickHandler} required/>
                    <br />

                    <label>Phone Number: </label>
                    <input 
                    className="inputStyle" 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="phone number" 
                    value={user.phoneNumber || ""} 
                    onChange={clickHandler} required/>
                    <br />

                    <input 
                    type="submit" 
                    className="inputStyle submitStyle"/>
                    <Route>
                    <p>Already a registered user:
                    <Link to="/login">Login</Link>
                    </p>
                    </Route>
                </form>
            </div>
        </div>
    )
}



export default SignUp
