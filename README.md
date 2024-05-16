## REACT JS Notes

-   React can have both named and default exports

```js

    // default export

    export default function App() {
        return(
            //Component details here

         );
    }
    // named export

    export function App() {
        return(
            //Component details here

         );
    }
```

The named and default exports are imported in
different ways

```js
// default export

import App from "./app.js";
// named export

import { App } from "app.js";
```

### React JSX

`jsx` is a way to write html code in javascript.
It is not part of react but a standalone syntax extension.

```jsx
export default function TodoList() {
    return (
        <div>
            <h1>Hedy Lamarr's Todos</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </div>
    );
}
```

Some rules for JSX are:

-   To return multiple elements from a component, wrap the with a single parent tag such as a `<div> </div>` or `<></>`. This empty tag is called a `Fragment`. Fragments let you group things without leaving any trace in the browser HTML tree.

-   JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li> oranges` must be written as `<li>oranges</li>`

-   camelCase most of the things!. such as `class` is a reserved word, in React you write `className`

#### Where to use curly braces

You can only use curly braces in two ways inside JSX:

-   As text directly inside a JSX tag: `<h1>{name}'s To Do List</h1>` works, but `<{tag}>Gregorio Y. Zara's To Do List</{tag}>` will not.

-   As attributes immediately following the `=` sign: `src={avatar}` will read the avatar variable, but `src="{avatar}"` will pass the string `"{avatar}"`.

-   To pass a JS object in JSX, you must wrap the object in another pair of curly braces: `person={{ name: "Hedy Lamarr", inventions: 5 }}`. eg:

```jsx
    <ul style={{
        backgroundColor: 'black',
        color: 'pink'
    }}>
```

### Handling click Events

how to use a function dynamicly an colling it when an event takes place

```js
const Home = () => {
    const handleClick = (e) => {
        console.log("hello MF");
    };
    const dynamicClick = (name) => {
        console.log("hello" + name);
    };
    return (
        <div className="home">
            <p>Home page</p>
            <button onClick={handleClick}>Click Me</button>
            {/* Passing a value to a function without calling the function. */}
            <button onClick={() => dynamicClick("manu")}>Click Me Again</button>
        </div>
    );
};

export default Home;
```

### State Management

State is a dynamic data storage that provides a mechanism for components to manage, keep track of changing data, and trigger re-rendering when it is updated.

When you create a variable with `let, var` or `const `, react does not check it for changes. When the value changes it does not trigger react to re-render the new value of the variable.

#### Making a variable reactive

We use a hook`(a special type of react function that has a certain function)`.

You need need to use the `useState` Hook.

```js
import { useState } from "react";

// Syntax =======================>

useState(/*<Initial_Value>*/); // You can assign it to a variable

const [name, setName] = useState("Manu");
// name  holds the current value of the state variable
// setName function used to update the value of the state variable
```

To update the name variable in react u just use the `setName` function

```js
// New value of Name
setName("Cypher");
```

```js
import { useState } from "react";
const Home = () => {
    let [name, setName] = useState("Manu");
    let [age, setAge] = useState(80);
    let [count, setCount] = useState(0);
    let [list, setList] = useState([]);
    const handleCount = () => {
        let newCount = count;
        newCount = newCount + 1;

        setCount(newCount);
    };
    const handleClick = (e) => {
        console.log("hello MF");
    };
    return (
        <div className="home">
            <p>Home page</p>
            <p>{name + " is " + age + " years old."}</p>
            <p>{"count is " + count}</p>
            <button onClick={handleClick}>Change Name</button>
            <button onClick={handleCount}>Change count</button>
        </div>
    );
};

export default Home;
```

#### Outputting Lists

Use `map`

```jsx
import { useState } from "react";
const Home = () => {
    let [blogs, setBlogs] = useState([
        {
            ID: 1,
            title: "Title 1",
            body: "lorem Ipsum...",
            author: "Omollo",
        },
        {
            ID: 2,
            title: "Title 2",
            body: "lorem Ipsum...",
            author: "Nimetoka",
        },
        {
            ID: 3,
            title: "Title 3",
            body: "lorem Ipsum...",
            author: "Bondo",
        },
    ]);
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.ID}>
                    <h2>{blog.title}</h2>
                    <h2>{"Written by " + blog.author}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
```

### React Props

Props are used to make components usable by passing data to the child component from the parent component .

Props are used because they make components more reusable

In the bloglist.jsx

```jsx

    const BlogList = function (props) {

        const blogs = props.blogs;
        const pageTitle = props.title
        console.log(blogs)

        return (
            <div className="blog-list">
                {blogs.map((blog) => (
                    
                    <div className="blog-preview" key={blog.ID}>
                        <p className="title">{pageTitle}</p>
                        <h2>{blog.title}</h2>
                        <h2>{"Written by " + blog.author}</h2>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>
        );
    }


```

in the home.jsx

```jsx
    return (
        <div className="home">
            // blogs is a list of blogs defined as seen in the above chapter
            <BlogList blogs={blogs} title="This is the fucking title" />
        </div>
    );
```

To access the blogs you just set the properties you want directly after writting the component befoore the closing `/>`. There are two ways to do that.

#### Accessing through the props key word 

```jsx

    const BlogList = function (props) {

        const blogs = props.blogs;
        const pageTitle = props.title
        console.log(blogs)

        return (
            <div className="blog-list">
                {blogs.map((blog) => (
                    
                    <div className="blog-preview" key={blog.ID}>
                        <p className="title">{pageTitle}</p>
                        <h2>{blog.title}</h2>
                        <h2>{"Written by " + blog.author}</h2>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>
        );
    }


```

#### Accessing the props directly

```jsx

const BlogList = function ({blogs, title}) {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                
                <div className="blog-preview" key={blog.ID}>
                    <p className="title">{title}</p>
                    <h2>{blog.title}</h2>
                    <h2>{"Written by " + blog.author}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}

```
