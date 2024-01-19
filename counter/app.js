// Imperative Programming
const countElement = document.getElementById("count");

// function setCount() {
//     let count = Number(countElement.textContent);
//     count = count + 1;
//     countElement.textContent = count;
// }

// This is imparative programming, I tell the interface how to get the elements
// Also which element and how to update the element with specific instructions
// on what to do and how to do it.


// The Declarative Programming Equivalent
const countApp = {
    // React Hooks for the state (Get and Set);
    getCount: () => {
        const countElement = document.getElementById("count");
        return Number(countElement.textContent);
    },
    setCount: (val) => {
        const countElement = document.getElementById("count");
        countElement.textContent = val;
    }
}

// Set state and update the values.
function setCount() {
    // Update the state using regular declative functions
    let count = countApp.getCount();
    if (count >= 5) {
        countApp.setCount(0);
    } else {
        countApp.setCount(count + 1);
    }
}