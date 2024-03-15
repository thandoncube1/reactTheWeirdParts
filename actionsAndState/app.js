const globalState = {
    NorthSouth: 'Green',
    CarWaiting: false,
    WaitTime: 30
}

function reducer(state, action) {
    // Reducer gets the current state and we can predict the next action
    // Return next state.
    switch(action.type) {
        case ('CAR_WAITING'): {
            return {
                ...state,
                CarWaiting: true,
                WaitTime: action.payload
            }
        }
        case ('FINISHED_WAITING'): {
            return {
                ...state,
                NorthSouth: 'Yellow'
            }
        }
        default: {
            return state;
        }
    }
}

console.log(globalState);
const newState1 = reducer(globalState, {
    type: 'CAR_WAITING',
    payload: {
        WaitTime: 5
    }
});
console.log(newState1);

const newState2 = reducer(globalState, {
    type: 'FINISHED_WAITING',
});
console.log(newState2);