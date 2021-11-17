import React from 'react'

function Login() {
    return (
        <form>
            <input type="email" name="email" placeholder="email" required/>
            <input type="password" name="password" placeholder="password" required />
            <input type="submit" />
        </form>
    )
}

export default Login
