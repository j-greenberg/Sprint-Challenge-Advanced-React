- [ ] Why would you use class component over function components (removing hooks from the question)?

A: In order to use the State in a class component, since hooks do not apply.

- [ ] Name three lifecycle methods and their purposes.

A: componentDidMount(), used when a component mounts. setState can be used in this function.

componentDidUpdate(), used when a prop or a state changes, causing the component to re-render.

componentWillUnmount(), called right before a component is destroyed. you cannot modify component state in this function. this function is used to remove event listeners, cancelling api calls, or clearing caches.

- [ ] What is the purpose of a custom hook?

A: A custom hook is a function that contains useState within it, can set state, and also changes other attributes at the same time, like localStorage, fetch, or CSS properties. It is reusable code that can be used for logins and other such functions.

- [ ] Why is it important to test our apps?

A: To make sure that the user flow works, that all components are rendering, to give the development team confidence that what they are delivering to a client is functional.
