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
