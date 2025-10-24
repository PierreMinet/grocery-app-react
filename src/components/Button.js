function Button(props) {
    return (
        <button
        className={props.buttonClass}
        onClick={props.onClickFunction}
        >
            {props.buttonText}
        </button>
    );
}

export default Button;