const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
console.log(root);
let counterName = "Two";
root.render(<App />);
console.dir(rootNode);

function App() {
    const counterOne = <Counter name={counterName} />;
    const counterTwo = <Counter2 name={counterName} />;
    return (
        <> { /**
         * A React Fragment is not added to the DOM tree. But is used as a
         * wrapper on the child elements and that makes the website render
         * a little quicker.
         */ }
            <h1>Counters</h1>
            <section>
                { counterName === "One" ?
                counterOne :
                counterTwo }
            </section>
            <button onClick={() => root.render(<App />)}>Rerender</button>
        </>
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
        <article>
            <h2>Counter {name}</h2>
            <p>Times clicked: 1</p>
            <button className="button">Click me</button>
        </article>
    )
}

rootNode.className = "root";