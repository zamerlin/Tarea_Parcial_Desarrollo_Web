import React, {useState} from 'react'
import { TextField, Button, Box, Alert } from '@mui/material'
//pagina de contacto *sin uso real*//
export default function Contact(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')
  const [sent,setSent] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setSent(true)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{maxWidth:600}}>
      {sent && <Alert severity="success">Mensaje enviado</Alert>}
      <TextField fullWidth label="Nombre" value={name} onChange={e=>setName(e.target.value)} sx={{my:1}} />
      <TextField fullWidth label="Email" value={email} onChange={e=>setEmail(e.target.value)} sx={{my:1}} />
      <TextField fullWidth label="Asunto" value={subject} onChange={e=>setSubject(e.target.value)} sx={{my:1}} />
      <TextField fullWidth label="Mensaje" value={message} onChange={e=>setMessage(e.target.value)} multiline rows={4} sx={{my:1}} />
      <Button variant="contained" type="submit">Enviar</Button>
    </Box>
  )
}
