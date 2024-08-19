Pop Quiz!

1. What is a React component?
A react component is function that returns html elements, these elements are created using the JSX syntax.

Answer: A function that returns React Elements, which are object that are created when you return JSX.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

The function's name needs to be pascal case and not camel case, MyComponent.

Answer: The function must be labeled via Pascal case or capitalize each word in the function name.


3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

The Header component should be a tag and not called with parenthesis like a you would a function.
<!-- ReactDOM.render(<Header />, document.getElementById("root")) -->

Answer: The component should be wrapped in tags and not called like a function
