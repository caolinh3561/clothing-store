import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";


const SignIn = () => {

    const loginByGooglePopup = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginByGooglePopup}>Sign in with Google</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
