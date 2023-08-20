import {useState} from 'react';

const initialFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(initialFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields,[name]:value});
    }

    return (
        <form>
            <h1>Sign Up</h1>
                <label>Display Name</label>
                <input type="text" required value={displayName} onChange={handleOnChange} name='displayName' />

                <label>Email</label>
                <input type="email" required value={email} onChange={handleOnChange} name='email' />

                <label>Password</label>
                <input type="password" required value={password} onChange={handleOnChange} name='password' />

                <label>Confirm Password</label>
                <input type="password" required value={confirmPassword} onChange={handleOnChange} name='confirmPassword' />
                <button>Submit</button>
        </form>
    )
}

export default SignUpForm;