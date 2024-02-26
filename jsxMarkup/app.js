const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return (
        <section>
            <h1>Counters</h1>
            <section>
                <Counter />
            </section>
        </section>
    );
}

function Counter({ name }) {
    return (
        <article>
            <h2>Counter { name }</h2>
            <p>You clicked 1 times</p>
            <button className="button">Click me</button>
        </article>
    );
}

function Counter2({ name }) {
    return (
        <div>
            <h2>Counter {name}</h2>
            <p>Times clicked: 1</p>
            <button className="button">
                Click me
            </button>
        </div>
    )
}

rootNode.className = "root";