import React, {useState, useContext, useEffect} from 'react'
import { TextField, Button, Box, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
//pagina de registro//
export default function Register(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const navigate = useNavigate()
  const { register } = useContext(UserContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    const result = register({name,email,password,confirmPassword})
    if(!result.success){
      setError(result.message)
      setSuccess('')
      return
    }
    setError('')
    setSuccess('Registro exitoso. Redirigiendo al login...')
  }

  useEffect(() => {
    if(!success) return
    const timeout = setTimeout(() => {
      navigate('/login', { state: { message: success } })
    }, 900)
    return () => clearTimeout(timeout)
  }, [success, navigate])

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{maxWidth:400}}>
      {success && <Alert severity="success" sx={{mb:2}}>{success}</Alert>}
      {error && <Alert severity="error" sx={{mb:2}}>{error}</Alert>}
      <TextField
        fullWidth
        label="Nombre"
        value={name}
        onChange={e=>setName(e.target.value)}
        sx={{mb:2}}
      />
      <TextField
        fullWidth
        label="Email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        sx={{mb:2}}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        sx={{mb:2}}
      />
      <TextField
        fullWidth
        label="Confirmar Password"
        type="password"
        value={confirmPassword}
        onChange={e=>setConfirmPassword(e.target.value)}
        sx={{mb:2}}
      />
      <Button variant="contained" type="submit">Registrarse</Button>
    </Box>
  )
}
