import React from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';



export const GoogleLoginButton = () => {
 const client_id=process.env.REACT_APP_GOOGLE_ID
    return (
        <GoogleOAuthProvider clientId={client_id}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    const decodeName=decoded.given_name
                    if(decodeName){
                        sessionStorage.setItem('user',JSON.stringify(decodeName));
                        // console.log(decodeName)
                        window.location.href='/'
                    }
                  
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};
