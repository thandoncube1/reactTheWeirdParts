const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

console.log(React);

function App() {
    console.log("Called App");
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter "),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", null, "Click me"))
    );
}

// Looking at the React tree or props we see the tree we created earlier using the DOM Object.
console.log(App());

// Happens before React does its work (Imperatively) - Added once the Javascript engine is available to be used again.
let articleElements = document.getElementsByTagName("article");
let articleElement = document.getElementsByTagName("article").item(0);
console.log(articleElements);
console.log(articleElement);

// After React does the work
setTimeout(() => {
    let articleElements = document.getElementsByTagName("article");
    let articleElement = document.getElementsByTagName("article").item(0);
    console.log(articleElements);
    console.log(articleElement);
} ,1000)