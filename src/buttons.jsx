/*
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
    // Like this:  <Button text="Click Me!" color="blue" fontSize={12} />
}
*/

function Button({text = "Click me!", color = "blue", fontSize = 12, handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>{text}</button>
    )

    // Rewritten using prop destructuring AND providing default props

    // Destructuring = naming the props in the component arguments
    // Button(props) <-- here
    // Makes the code more readable because all props are listed in one place, right at the top

    // Providing default props = giving values for the props in the component arguments
    // Saves repetition.
    // When default values are used, it looks like this <Button />
    // Default values can be overriden if needed, using the same syntax as you would when no default is provided <Button text="Don't Click Me!" color="red" fontSize={12} />

    // Assigned a default onClick function
    // handleClick doesn't have to be the function name, it's just the prop name
    // The prop handleClick will be assigned to a function that is defined in app.jsx (or imported into it)
}

export default Button;