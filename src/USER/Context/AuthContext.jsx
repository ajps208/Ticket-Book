import React, { createContext, useState } from 'react'

export const AuthStatus=createContext()
function AuthContext({children}) {
    const[logedUser,setLogedUser]=useState({})
  return (
    <>
    <AuthStatus.Provider value={{logedUser,setLogedUser}}>
        {children}
    </AuthStatus.Provider>
    </>
  )
}

export default AuthContext