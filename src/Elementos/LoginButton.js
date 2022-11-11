import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button
    onClick={() => loginWithRedirect()}
    class="btn btn-outline-light me-2"
  >
    Login
  </button>
}
