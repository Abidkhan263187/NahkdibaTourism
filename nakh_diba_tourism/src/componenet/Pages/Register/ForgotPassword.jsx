import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import './reg.css'
export const ForgotPassword = () => {

  const [email,setEmail]=useState()

  const handleReset=()=>{
 console.log(email)
  }
  return (
    <Box id="forgot_main">

    <FormControl  m={'auto'}>
    <FormLabel>Enter Email</FormLabel>
          <Input
            type="email"
            value={email}
            outlineOffset={'none'}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='enter  registered email'
            autoComplete="nope"
            isRequired
          />
          <Button  id="resetButton" onClick={handleReset}> Send Reset Link</Button>
    </FormControl>
    </Box>
  )
}
