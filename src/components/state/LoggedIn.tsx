import {useState} from 'react'

const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
  return (
    <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
        <p>User is {isLoggedIn ? "logged in" : "logged out"}</p>
    </div>
  )
}

export default LoggedIn