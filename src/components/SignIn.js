import react from 'react';

const SignIn = (props) => {

    const signInWithGoogle = () => {
      const provider = new props.firebase.auth.GoogleAuthProvider();
      props.auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Iniciar Sesión con Google</button>
        <div className="text-sign-in" >
          <p className="labelSignIn">This chat is public. <span className="highligthSignIn"> Be nice, have fun! </span></p>
          <p className="labelSignIn">Este chat es público. <span className="highligthSignIn"> Se amable, a divertirse!</span></p>
        </div>
      </>
    )
  
  }

export default SignIn