const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(<App />);

function App() {
    return (
        <>
            <h1>Counters</h1>
            <section>
               <Counter name="One" />
               <Counter name="Two" />
            </section>
        </>
    );
}

function Counter(props) {
    const [numOfClicks, setNumOfClicks] = React.useState(0);

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks} times</p>
            <ButtonComponent buttonName={'INCREMENT'} dispatch={setNumOfClicks} numOfClicksOpr={numOfClicks + 1} />
            <ButtonComponent buttonName={'DECREMENT'} dispatch={setNumOfClicks} numOfClicksOpr={numOfClicks - 1} disabledAttr={numOfClicks <= 0 ? "disabled" : false} />
        </article>
    );
}

function ButtonComponent({ buttonName, dispatch, numOfClicksOpr, disabledAttr }) {
    return <button className="button" onClick={() => dispatch(numOfClicksOpr)} disabled={disabledAttr}>
        { buttonName }
    </button>
}