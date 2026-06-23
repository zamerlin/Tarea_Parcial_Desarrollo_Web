import React, {useState, useContext} from 'react'
import { TextField, Button, Box, Alert } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
////pagina de login////
export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [notification,setNotification] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { login } = useContext(UserContext)

  React.useEffect(() => {
    setNotification(location.state?.message || '')
  }, [location.state])

  const handleSubmit = (e)=>{
    e.preventDefault()
    const result = login({email, password})
    if(!result.success){
      setError(result.message)
      setNotification('')
      return
    }
    setError('')
    setNotification('')
    navigate('/perfil')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{maxWidth:400}}>
      {notification && <Alert severity="success" sx={{mb:2}}>{notification}</Alert>}
      {error && <Alert severity="error" sx={{mb:2}}>{error}</Alert>}
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
      <Button variant="contained" type="submit">Ingresar</Button>
    </Box>
  )
}
