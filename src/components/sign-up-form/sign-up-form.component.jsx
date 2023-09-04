import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGoogleEmailAndPassword,
  createUserWithGoogleEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";
import './sign-up-form.styles.scss';

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ displayName, email, password, confirmPassword });
    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }
    try {
      const userAuth = await createUserWithGoogleEmailAndPassword(
        email,
        password
      );
      if (userAuth && userAuth.user) {
        userAuth.user.displayName = displayName;
        createUserDocumentFromAuth(userAuth.user);
      }
      // const user = await signInWithGoogleEmailAndPassword(email, password);
      await signInWithGoogleEmailAndPassword(email, password);

    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('Email already in used');
          break;
      
        default:
          break;
      }
      console.log("logging is failed with error ", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            value: displayName,
            onChange: handleOnChange,
            name: "displayName",
          }}
        />

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

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            value: confirmPassword,
            onChange: handleOnChange,
            name: "confirmPassword",
          }}
        />

        <FormButton type="submit">Sign Up</FormButton>
      </form>
    </div>
  );
};

export default SignUpForm;
