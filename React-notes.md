# React Notes 2024

## What is React?

React is a popular JavaScript library for building UI, particularly for web applications.

**History of React**

- React began as internal tool for dynamic facebook components called news feed.
- Created in 2011 but remained private initially.
- React was open-sourced by Jordan Walke and Tom Occhino at JSConfUS 2013.
- Initially faced criticism for combining JavaScript and HTML in a single file.
- It slowly gained traction and blew up in adoption.

**The Problem with Traditional Web Approach**

1. Web Development Challenges

   - Manipulating DOM
   - Updating State and UI

2. Lack of Reusability

   - Unclear way for building components
   - No consistency
   - Harder to maintain clear code

3. Complex Data Binding
   - Unclear way for building components

### Why React?

1. **Component Based Architecture:** React allows you to break down your UI into reusable components. This makes your code more modular and easier to manage.

2. **Declarative Approach:** React uses a declarative approach to define how your UI should look based on the application's state. Instead of directly manipulating the DOM, you describe what you want the UI to look like, and React takes care of updating the DOM efficiently.

3. **Virtual DOM:** React uses a virtual DOM to represent the UI, which is a lightweight copy of the actual DOM. When the state of your application changes, React compares the virtual DOM with the previous version to determine the minimal set of DOM operations needed to update the UI. This can result in better performance compared to directly manipulating the DOM.

**What does Declarative & Imperative Approach:**

**Declarative** means, you describe WHAT you want to do, not specify HOW to get it done!

Here's an example:-

```
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1>This is declarative way of programming</h1>);
```

In above example, we want to render heading, and we describe that to render a heading to root. But how to done it we don't mention. React will handle everything on its behalves.

**Imperative** means, you describe WHAT you want, be specifying all the INSTRUCTIONS on HOW to do it.

```
- Create a new h1 element
- Give it some textContent
- Give it a class name "header"
- Append it as a child of the div#root

const heading = document.createElement('h1');
heading.textContent = "This is imperative way of programming";
heading.className = "heading"
document.getElementById('root').appendChild(heading);
```

## Fundamental Concepts of React

- Components
- JSX
- Adding JavaScript Expressions
- List Rendering
- Props
- Events
- State
- Fundamental Hooks
  - useState
  - useEffect
  - useContext
- Form Handling

## Components

Component is reusable piece of code that used to define certain part of UI.

**Defining a component:**

```
const Profile = () => {
   return (
      <img
         src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-professor-money-heist-digital-portrait-gururaj-paradkar.jpg"
         alt="The professor" />
   );
};

export default Profile;
```

The component returns an `<img />` tag with src and alt attributes. `<img />` is written like HTML, but it is actually JavaScript under the hood! This syntax is called **JSX**.

**Using a component:**

```
import Profile from "./Profile";

const Gallery = () => {
   return (
      <section>
         <h1>Money Heist Casts</h1>
         <Profile />
         <Profile />
         <Profile />
      </section>
   )
}
```

**What Does Browser Sees**

```
<section>
   <h1>Money Heist Casts</h1>
   <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-professor-money-heist-digital-portrait-gururaj-paradkar.jpg" alt="The professor" />

   <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-professor-money-heist-digital-portrait-gururaj-paradkar.jpg" alt="The professor" />

   <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-professor-money-heist-digital-portrait-gururaj-paradkar.jpg" alt="The professor" />
</section>
```

💡 NOTE:-

1. React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

2. Components can render other components, but you must never nest their definitions:

```
Never nest component definitions like this ❌:

const Gallery = () => {
   const Profile = () => {
      // ....
   }
}
```

## JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

```
const MyComponent = () => {
   return <h1>This is my component</h1>
};
```

Inside a return, we have actually write a JSX code, it's similar to HTML but not HTML.

Browsers like chrome, firefox, brave etc. They don't understand What JSX and modern JavaScript is? So, Babeljs.io/repl is a tool that compile/transpile JSX into JavaScript so that browser can understand.

💡 Note:-

JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

**The Rules of JSX**

1. **Return a single root element:** To return multiple elements from a component, wrap them with a single parent tag.

   For example, you can use a `<div>`

   ```
   const MyComponent = () => {
      return(
         <h1>Hello from my component</h1>
         <p>How are you?</p>
      );
   }

   ❌ Wrong way to render a multiple elements
   ```

   ```
   const MyComponent = () => {
      return(
         <div>
            <h1>Hello from my component</h1>
            <p>How are you?</p>
         </div>
      )
   }

   ✅ Right way to render a multiple elements
   ```

2. **Close all the tags**: JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>`oranges must be written as `<li>`oranges`</li>`

3. **camelCase all most of the things:** `className` instead of `class`, since `class` is reserved keyword. `strokeWidth` instead of `stroke-width`, `backgroundColor` instead of `background-color`.

## Adding JavaScript Expression

An expression is any valid unit of code that resolves to a value. Expressions can be simple, such as a single variable, or complex, involving operators, function calls, and other expressions.

In React, you can inject expressions directly into JSX code by enclosing them in curly braces {}. This allows you to dynamically render values, variables, or the results of expressions within your components.

{ } is also called evaluated expression, because we don't write whole javascript, we can only inject the final outcome which evaluate.

Here's an example:-

```
const TaskCounter = () => {

   const user = "Mohit";
   const task = 5;

   const checkTaskCount = () => {
      return task === 0 ? "All task completed ✅" : `Remain task ${task}`;
   };

   return (
      <div>
         <h1>{user}'s Remain Task !!</h1>
         <h3>{checkTaskCount()}</h3>
      </div>
   )
}
```

## List Rendering

You will often want to display multiple similar components from a collection of data. You can use the JavaScript array methods to manipulate an array of data.

**Rendering Data From Array**

```
const people = [
  'Rohit Sharma',
  'Lionel Messi',
  'Narendra Modi',
  'Virat Kohli',
];
```

```
const List = () => {
   return (
      <div>
         {people.map((item) => (
            <div>
               <h1>{item}</h1>
            </div>
         ))}
      </div>
   )
};

⚠️: Each child in a list should have a unique "key" prop.
```

You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:

Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

```
const people = [
  {id: 0, name: "Rohit Sharma"},
  {id: 1, name: "Lionel Messi"},
  {id: 2, name: "Narendra Modi"},
  {id: 3, name: "Virat Kohli"},
];
```

```
const List = () => {
   return (
      <div>
         {people.map((item) => (
            <div key={item.id}>
               <h1>{item.name}</h1>
            </div>
         ))}
      </div>
   )
};
```

## Props

Props are used for one-way communication to different components.

- Parent(Container) component sends data in the form of props.
- The child component can use that data via props

**Pass props to the child component**

```
const Gallery = () => {
   return (
      <Profile
         person={{name: "Rohit Sharma", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25uhv3LIGyCcgSljUsZiFB_t9B_HjZ13kIg&s"}},
         size={100}
      />
   );
}
```

**Read props inside the child component**

```
const Profile = ({person, size}) => {
   // Now we can access person and size props here...
};
```

## Props with Children

Passing components as props to components

- A component can send JSX as Props and a Children can use it.
- You can have a layout structure with it.

```
Syntax:-

<Child><div> I'm nested child </div> </Child>
```

## Events

Events are used for user interaction.

- Events are subscribed and gets fired when specified user's interaction.
- Can update anything

```
const App = () => {
   return (
      <button onclick={() => alert("Hyy Everyone !")}>Click me</button>
   )
}
```

## State in React

The state represents data in a component.

- Allows components to manage and store data that can change over time.
- A crucial part of building dynamic web apps.

**When regular variable isn't enough**

Here’s a component that renders a count. Clicking the “+” and “-” button should increase the value of count by 1 and decrease the value of count by 1. However, this won’t work:

```
function App() {
  let count = 0;

  const decreaseCount = () => {
    count = count - 1;
    console.log(count);
  };

  const increaseCount = () => {
    count = count + 1;
    console.log(count);
  };

  console.log("Component re-rendered");
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}
```

The "decreaseCount" and "increaseCount" event handler is updating a local variable, count. But two things prevent that change from being visible:

➡️ Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.

➡️ Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

To update a component with new data, two things need to happen:

1. Retain the data between renders.
2. Trigger React to render the component with new data (re-rendering).

The useState Hook provides those two things:

1. A state variable to retain the data between renders.
2. A state setter function to update the variable and trigger React to render the component again.

Here is:

- count: The current value of the state which is 0.
- setCount: A function that allow you to change "state" variable.

```
function App() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  console.log("Component re-rendered");
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}
```

**Important Interview Question Related to State**

```
function App() {
  const [count, setCount] = useState(0);

  /*
   when you call setCount multiple times in quick succession like in your increaseCount or decreaseCount function, React doesn't immediately update the state after each call. Instead, it batches state updates for performance reasons.

   When you call setCount multiple times in a row with the same value of count, React optimizes and batches those state updates into a single update. So, even though you call setCount four times with count + 1, React will only perform one actual state update with the final incremented value.

   To make sure each increment is counted properly, you can use the functional form of setState where the new state is based on the previous state.
  */

  const decreaseCount = () => {
    // setCount(count - 1);

    // setCount(count - 1);  // scheduled at count was 0
    // setCount(count - 1);  // scheduled at count was 0
    // setCount(count - 1);  // scheduled at count was 0

    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  const increaseCount = () => {
    // setCount(count + 1);

    // setCount(count + 1);  // scheduled at count was 0
    // setCount(count + 1);  // scheduled at count was 0
    // setCount(count + 1);  // scheduled at count was 0

    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  console.log("Component re-rendered");
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}
```

## State with Array

Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. When you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.

```
function App() {
  const [itemsArray, setItemsArray] = useState(["Item 1", "Item 2"]);

  const item = itemsArray.map((item) => <p key={item}>{item}</p>);

  const handleAddItems = () => {
    setItemsArray((prev) => [...prev, `Item ${itemsArray.length + 1}`]);
  };
  return (
    <div>
      <button onClick={handleAddItems}>Add Item</button>
      {/* Insert the items here*/}
      {item}
    </div>
  );
}
```

## Rendering Process of Components

**The Rendering**: A process of generation visual representation of UI.

Rendering usage the term called virtual DOM.

**The Virtual DOM**: The copy of Real DOM, managed by react to identify updates.

Updates the component to optimize state updates and performance.

It update only those components where the state has changed.

Both uses the internal Algorithm called The Reconcilliation.

**The Reconcilliation**: Algorithm for changing DOM. Compares the new Virtual DOM tree with previous one and updates the state.

## Hooks in React

Hooks are special functions that help manage state and components efficiently.

- Functions that helps us use React's features of handling state.
- Introduced in React 16.8 which also helps us use lifecycle methods.
- Helps in reusability, avoiding classes and easier code generation.

Hooks are both predefined and can be created according to requirement.

## useEffect Hook

The useEffect Hook allows you to perform side effects in your components.

**What exactly is an "effect" ?**

The word effect refers to a functional programming term called a "side effect". But to really understand what a side effect is, we first have to grasp the concept of a pure function.

You may not know this, most React components are intended to be pure functions. It may be strange to think about React components as functions, but they are.

Most React components are pure functions, meaning they receive an input and produce a predictable output of JSX. The input to a JavaScript function is arguments. What is the input to a React component, however? Props!

Here we have a User component that has the prop name declared on it. Within User, the prop value is displayed in a header element.

```
export default function App() {
return <User name="John Doe" />
}

function User({name}) {
return <h1>{name}</h1>; // John Doe
}
```

This is pure because, given the same input, it will always return the same output. If we pass User a name prop with value "John Doe", our output will always be John Doe.

Pure functions have the great benefit of being predictable, reliable, and easy to test. This is as compared to when we need to perform a side effect in our component.

**What are side effects in React ?**

Side effects are not predictable because they are actions which are performed with the "outside world."

We perform a side effect when we need to reach outside of our React components to do something. Performing a side effect, however, will not give us a predictable result.

Common side effects include:

➡️ Making a request to an API for data from a backend server
➡️ To interact with browser APIs (that is, to use document or window directly)
➡️ Using unpredictable timing functions like setTimeout or setInterval

This is why useEffect exists: to provide a way to handle performing these side effects in what are otherwise pure React components.

**Cleanup function in useEffect**

Imagine that you have a React component that displays a list of items from an API. Every time the component is rendered, it fetches the latest list of items from the API and displays them to the user.

Let’s say the user decides to navigate away from this component to a different part of the app. The component is no longer being rendered, so there’s no need to continue fetching the list of items from the API. However, the fetch request is still ongoing in the background.

This is where the useEffect cleanup function comes in. The cleanup function is a function that is called when the component is unmounted (i.e., when it is no longer being rendered). It allows you to perform any necessary cleanup tasks, such as cancelling an ongoing API request.

## useRef Hook

Allows to access DOM without triggering re-render.

- Used for communication with DOM properties.
- An uncontrolled element by react
- Have a current property which accesses DOM methods and properties.

Here's an example:-

```
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(`You clicked ${count} times`);
  };

  console.log("Component rendered");

  return <button onClick={handleClick}>Click me!</button>;
};
```

This component triggered re-rendering to `Counter` component as state update. Component re-rendering is tied to state updates by design.

However, if you want to avoid re-renders when updating a piece of state, you can use a useRef instead of useState. useRef is primarily used for mutable values that do not cause re-renders when they change.

```
import { useRef } from "react";

const Counter = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(`You clicked ${countRef.current} times`);
  };

  console.log("Component rendered");

  return <button onClick={handleClick}>Click me!</button>;
};
```

## useReducer Hook

Used to manage complex state logic by dispatching actions.

- Can handle complex state management logic.
- Similar to Redux pattern.
- Widely used for expensive calculations.
- Identifies state update via dispatching actions and payload.

## Context API

Context API allows data to be passed through a component tree without having to pass props manually at every level.

It solves props drilling , where props are sent to a deep of components. Prop drilling can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on.

## The Redux

A state management library.

- Redux can help you manage complex state.
- Can be used with any JavaScript Application.
- It follows CDS pattern. A Central Data Store
- Represents single source of truth.
- Synchronously updates the state.

Difference between React Context API and Redux

<img src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*nvjlFnZc9Wx7-AOsaGZiHg.png" width="500px">

When to use React Context API vs Redux?
The decision to use React Context API or Redux depends on the specific needs and complexity of your application.

Use React Context API:

1. Small to medium-sized applications

2. Fewer levels of data sharing

3. Component-specific state:

Use Redux:

1. Large and complex applications

2. Deeply nested components

3. Asynchronous data flow

The Redux Terms

- Actions: Actions are a way to describe what happened in an application.

- Reducers: Logical functions to update the state based on actions.

- Store: Hold entire state of application.
