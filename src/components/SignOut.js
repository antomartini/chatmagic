import react from 'react';

const SignOut = (props) => {
    return props.auth.currentUser && (
      <button className="sign-out" onClick={() => props.auth.signOut()}>CERRAR SESION</button>
    )
  }
  
export default SignOut