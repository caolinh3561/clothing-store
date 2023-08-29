import './form-button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const FormButton = ({buttonType, children, inputOptions}) => {
    return (
        <button className={`button-layout ${buttonType? BUTTON_TYPE_CLASSES[buttonType] : ""}`} {...inputOptions}>
            {children}
        </button>
    )
}

export default FormButton;