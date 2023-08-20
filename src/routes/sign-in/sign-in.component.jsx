import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const loginByGooglePopup = async () => {
        const {user} = await signInWithGooglePopup();

        const userDocRef = createUserDocumentFromAuth(user);
        // console.log(userDoc);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginByGooglePopup}>Sign in with Google</button>
        </div>
    )
}

export default SignIn;