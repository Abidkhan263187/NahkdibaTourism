import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './reg.css'
import { updatePassword } from '../../Redux/api'
import { useNavigate } from 'react-router-dom'




export const ResetPassword = () => {
  const navigate = useNavigate()
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [pass, setPass] = useState({
    password: "",
    confirmPassword: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setPass({ ...pass, [name]: value })
    if (name === 'confirmPassword') {
      if (pass.password !== value) {
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError('');
      }
    }

  }
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleUpdate = (e) => {
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token, pass.password, pass.confirmPassword)
    updatePassword(gotoHome, token, pass.password, pass.confirmPassword)
  }
  const gotoHome = () => {

    navigate('/login')
  }


  return (
    <Box id="forgot_main">
      <form onSubmit={handleUpdate}>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={pass.password}
            onChange={handleChange}
            required
          />
          <i
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              top: '70%',
              right: '10px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: "gray"
            }}
            className={showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
          ></i>

        </FormControl>

        <FormControl isInvalid={!!passwordError}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={pass.confirmPassword}
            onChange={handleChange}
            required
          />
          <i
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              top: '40%',
              right: '10px',
              transform: 'translateY(-50%)',
              color: "gray",
              cursor: 'pointer'
            }}
            className={showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
          ></i>
          {passwordError && (
            <FormErrorMessage>{passwordError}</FormErrorMessage>
          )}
          <Button id="resetButton" type="submit"> Update Password</Button>
        </FormControl>
      </form>
    </Box>
  )
}

