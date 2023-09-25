import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './reg.css'
import { updatePassword } from '../../Redux/api'
export const ResetPassword = () => {
// const [token,setToken]=useState()
  const [pass,setPass]=useState({
    password:"",
    confirmPassword:""
  })
// useEffect(()=>{
  
//    setToken(token)
// },[])
  const handleUpdate=()=>{
   
    const token=JSON.parse(localStorage.getItem('token'))
    // console.log(token,pass.password,pass.confirmPassword)
 updatePassword( token,pass.password,pass.confirmPassword)
  }
  return (
    <Box id="forgot_main">

    <FormControl  m={'auto'}>
    <FormLabel>New Password</FormLabel>
          <Input
            type="password"
            value={pass.password}
            name="password"
            outlineOffset={'none'}
            onChange={(e)=>setPass({...pass,[e.target.name]:e.target.value})}
            placeholder='enter  new password'
            autoComplete="nope"
            isRequired
          />
         <FormLabel>Confirm Password</FormLabel>
         <Input
            type="password"
            value={pass.confirmPassword}
            name="confirmPassword"
            outlineOffset={'none'}
            onChange={(e)=>setPass({...pass,[e.target.name]:e.target.value})}
            placeholder='confirm  password'
            autoComplete="nope"
            isRequired
          />
          <Button  id="resetButton" onClick={handleUpdate}> Update Password</Button>
    </FormControl>
    </Box>
  )
}
