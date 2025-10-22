function Button(props) {
    return (
        <button
        className={props.buttonClass}
        >
            {props.buttonText}
        </button>
    );
}

export default Button;