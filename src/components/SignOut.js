import react from 'react';

const SignOut = (props) => {
    console.log("Ingresa a SignOut")
    console.log("props", props.auth.currentUser )

    return props.auth.currentUser && (
      <button className="sign-out" onClick={() => props.auth.signOut()}>CERRAR SESION</button>
    )
  }
  
export default SignOut