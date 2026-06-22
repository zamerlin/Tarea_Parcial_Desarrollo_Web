import React from 'react'
import { Box, Typography, Link } from '@mui/material'
//footer(lo que va abajo del todo)//
export default function Footer(){
  return (
    <Box component="footer" sx={{mt:6,py:3,backgroundColor:"grey"}}>
      <Box sx={{maxWidth:960,mx:'auto',px:2,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Box>
          <Typography variant="subtitle1">Mi Tienda Magica</Typography>
          <Typography variant="body2">email@empresa.com · +54 9 11 1234-5678</Typography>
        </Box>
        <Box>
          <Typography variant="body2">Dirección ficticia - © {new Date().getFullYear()}</Typography>
          <Typography variant="body2">
            <Link href="#">Twitter</Link> · <Link href="#">Facebook</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
