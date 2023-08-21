import {useState} from 'react';
import { createUserDocumentFromAuth, signInWithGoogleEmailAndPassword, createUserWithGoogleEmailAndPassword } from '../../utils/firebase/firebase.utils';

const initialFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(initialFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields,[name]:value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({displayName, email, password, confirmPassword});
        if(password !== confirmPassword || displayName.length <= 1) return;
        try {

            const userAuth = await createUserWithGoogleEmailAndPassword(email, password);
            if(userAuth && userAuth.user){
                userAuth.user.displayName = displayName;
            }
            const userDocRef = createUserDocumentFromAuth(userAuth.user);
            const signIn = signInWithGoogleEmailAndPassword(email, password);
            console.log(userAuth);
        } catch (error) {
            console.log("logging is failed with error ",error.message);
        }
        // const { user } = await signInWithGoogleEmailAndPassword(email, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
                <label>Display Name</label>
                <input type="text" required value={displayName} onChange={handleOnChange} name='displayName' />

                <label>Email</label>
                <input type="email" required value={email} onChange={handleOnChange} name='email' />

                <label>Password</label>
                <input type="password" required value={password} onChange={handleOnChange} name='password' />

                <label>Confirm Password</label>
                <input type="password" required value={confirmPassword} onChange={handleOnChange} name='confirmPassword' />
                <button type='submit'>Submit</button>
        </form>
    )
}

export default SignUpForm;