import React from 'react'
import { Container, Box, Paper } from '@mui/material'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <Box sx={{display:'flex', flexDirection:'column', minHeight:'100vh', backgroundColor:'#f0f2f5'}}>
      <Header />
      <Box component="main" sx={{flexGrow:1, py:4}}>
        <Container maxWidth="lg" sx={{display:'flex', justifyContent:'center'}}>
          <Paper sx={{width:'100%', p:4, borderRadius:3, boxShadow:3, bgcolor:'#fff'}}>
            <AppRoutes />
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
