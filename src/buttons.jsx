function Button(props) {

    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + "px"
    };

    return (
        <button style={buttonStyle}>{props.text}</button>
    )

    // When rendering button component, 3 prop values should be defined: color, fontSize, text
    // Function Button will be called with props as arguments somewhere in app.jsx
    // Like this:  return <Button text="Click Me!" color="blue" fontSize={12} />
}

export default Button;