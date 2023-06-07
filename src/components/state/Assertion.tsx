import {useState} from 'react'

type AuthUser = {
    name: string,
    email: string,
}
const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: "John Doe",
            email: "john@gmail.com"
        })
    }
    const handleLogout = () => {
        setUser({} as AuthUser)
    }

  return (
    <div>
        <p>User's name is {user?.name}</p>
        <p>User's email is {user?.email}</p>
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default User