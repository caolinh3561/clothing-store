import SignInForm from "../../components/sign-in/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './authentication.styles.scss';

const Authentication = () => {

    return (
        <div className="authentication-container">
            <div className="login-container">
            <SignInForm />
            <SignUpForm />
        </div>
        </div>
    );
};

export default Authentication;
