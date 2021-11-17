import React from 'react'

function SignUp() {
    return (
        <form>
                    <label>First Name: </label>
                    <input className="inputStyle" name ="firstname"  type="text" placeholder="first name" required/>
                    <br />
                    <label>Last Name: </label>
                    <input className="inputStyle" name= 'lastname' type="text" placeholder="last name" required/>
                    <br />
                    <label>Email: </label>
                    <input className="inputStyle" name='email' type="email" placeholder="email" required/>
                    <br />
                    <label>Password: </label>
                    <input className="inputStyle" name='password' type="password" placeholder="password" required/>
                    <br />
                    <label>Phone Number: </label>
                    <input className="inputStyle" type="text" name="phoneNumber" placeholder="phone number" required/>
                    <br />
                    <input type="submit"/>
                    <p>Already a registered user:</p>
                </form>
    )
}

export default SignUp
