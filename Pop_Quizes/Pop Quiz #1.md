1. Why do we need to `import React from "react"` in our files?
In order to type and utilize the JSX language we need to import the react node module into our projects.

Answer: The JSX Syntax is defined within react, without it JSX would result in an error when utilizing it.
        React is what defined JSX

2. If I were to console.log(page) in index.js, what would show up?
It would show a JavaScript object since all JSX elements are converted to objects by the react node module.

Answer: Page is a bunch of JSX which just returns a javascript object

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

Correct Code
```
const page = (
    <div>
        <h1>Hello</h1>
        <p>This is my website!</p>
    </div>
)
```

Or

Correct Code
```
const page = (
    <>
        <h1>Hello</h1>
        <p>This is my website!</p>
    </>
)
This uses a fragment which helps when you don't want to create or use a lot of divs in your project.
``` 

All JSX elements can only return a single element, to fix this the h1 and p elements need to be nested inside of a outer element, like a div.

Answer: We need our JSX to be nested under a single parent element.

4. What does it mean for something to be "declarative" instead of "imperative"?
<!-- Declarative means that you do not need to specify what each variable or element on a page strictly is while imperative means that it is required for you to do so. -->

Answer: Declarative means that you do not need to describe everything step by step, the steps are already known and simply asking for it to be done and it will know how to do it.
        Imperative means that you need to describe every step of the process and treat it as if nothing is known or assume before hand.

Video's Exact Answer: Declarative means I can tell the computer WHAT to do 
                        and expect it to handle the details. Imperative means I need
                        to tell it HOW to do each step.

5. What does it mean for something to be "composable"?

It means that it can be created from other elements, and in react, these elements are called components?

Answer: You can create small pieces to create a greater whole, pieces of ui can be created in individual components and then combined on the main page to create
        one singular element.
