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
            </section>
        </>
    );
}

function Counter(props) {
    // Constants
    const actionOption = {
        increment: 'Increment',
        decrement: 'Decrement'
    }

    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'Increment':
                return { clicks: state.clicks + 1 }
            case 'Decrement':
                return { clicks: state.clicks - 1 }
            default:
                throw new Error();
        }
    }, { clicks: 0 });

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {state.clicks} times</p>
            <ButtonComponent dispatch={dispatch} actionType={actionOption.increment} buttonName={'INCREMENT'} />
            <ButtonComponent dispatch={dispatch} actionType={actionOption.decrement} buttonName={'DECREMENT'}/>
        </article>
    );
}

function ButtonComponent({ dispatch, actionType, buttonName }) {
    return <button className="button" onClick={() => {
        dispatch({ type: actionType })
    }}>
        { buttonName }
    </button>
}