import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGoogleEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";
import './sign-in-form.styles.scss';

const initialFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignInSubmit = async (event) => {
    event.preventDefault();
    try {
      signInWithGoogleEmailAndPassword(email, password);
    } catch (error) {
      console.log("logging is failed with error ", error);
    }
  };

  const loginByGooglePopup = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
    } catch (error) {
      console.log("login with google popup failed ", error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignInSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            value: email,
            onChange: handleOnChange,
            name: "email",
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            value: password,
            onChange: handleOnChange,
            name: "password",
          }}
        />
      </form>
      <div className="buttons-container">
          <FormButton type="submit">Sign In</FormButton>
          <FormButton buttonType='google' inputOptions={{onClick:loginByGooglePopup, type:"button"}}>
            Google Sign In
          </FormButton>
        </div>
    </div>
  );
};

export default SignInForm;
