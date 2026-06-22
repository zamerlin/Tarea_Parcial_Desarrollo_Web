import React, { createContext, useState } from 'react'

export const UserContext = createContext()

function validEmail(email){
  return typeof email === 'string' && email.trim().toLowerCase().endsWith('@mail.com')
}
//contexto del usuario//
export function UserProvider({children}){
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

  function login({email,password}){
    if(!validEmail(email)){
      return {success:false, message:'El email debe terminar en @mail.com'}
    }
    if(password.length <= 5){
      return {success:false, message:'La contraseña debe tener más de 5 caracteres'}
    }
    const found = users.find(u => u.email === email && u.password === password)
    if(!found){
      return {success:false, message:'Email o contraseña incorrectos'}
    }
    setUser({name: found.name, email: found.email})
    return {success:true}
  }

  function logout(){ setUser(null) }

  function register({name,email,password,confirmPassword}){
    if(!name.trim()){
      return {success:false, message:'El nombre es obligatorio'}
    }
    if(!validEmail(email)){
      return {success:false, message:'El email debe terminar en @mail.com'}
    }
    if(password.length <= 5){
      return {success:false, message:'La contraseña debe tener más de 5 caracteres'}
    }
    if(password !== confirmPassword){
      return {success:false, message:'Las contraseñas no coinciden'}
    }
    if(users.some(u => u.email === email)){
      return {success:false, message:'El email ya está registrado'}
    }
    const newUser = {name: name.trim(), email, password}
    setUsers(prev => [...prev, newUser])
    return {success:true}
  }

  return (
    <UserContext.Provider value={{user, login, logout, register}}>
      {children}
    </UserContext.Provider>
  )
}
