import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import './reg.css'
import { forgotPasword } from '../../Redux/api'
export const ForgotPassword = () => {

  const [email,setEmail]=useState()

  const handleReset=()=>{
 console.log(email)

 forgotPasword(email)
  }
  return (
    <Box id="forgot_main">

    <FormControl  m={'auto'}>
    <FormLabel>Forgot Password</FormLabel>
          <Input
            type="email"
            value={email}
            outlineOffset={'none'}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='enter  registered email'
            autoComplete="nope"
            isRequired
          />
          <Button  id="resetButton" onClick={handleReset}> Send Password  Reset Link</Button>
    </FormControl>
    </Box>
  )
}
