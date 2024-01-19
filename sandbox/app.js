// function countDown(num) {
//     console.log(num);

//     if (num === 0) return;

//     countDown(num - 1);
// }

// countDown(5);

// Traverse to move across or through something. In the case of a tree data structure we mean to move from element to element, that is from parent to child to sibling. 

// POJO - Plain Old Javascript Objects * simple collections of name value pairs

/**
 * Virtual DOM Object according to how we can represent it.
 */
let markup = {
    type: 'article',
    children: [
        {
            type: 'h2',
            children: [
                {
                    type: 'text',
                    value: 'Counter'
                }
            ]
        },
        {
            type: 'h3',
            children: [
                {
                    type: 'text',
                    value: 'This works!'
                }
            ]
        },
        {
            type: 'p',
            children: [
                {
                    type: 'text',
                    value: 'Counter'
                },
                {
                    type: 'strong',
                    children: [
                        {
                            type: 'em',
                            children: [
                                {
                                    type: 'text',
                                    value: ' 1'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'text',
                    value: ' times'
                }
            ]
        },
        {
            type: 'button',
            children: [
                {
                    type: 'text',
                    value: 'Click me'
                }
            ]
        }
    ]
}

console.log(markup);

// Imperative code to make the declarative code to work.

const main = document.getElementById("app");

function addElements(pojoElement, parentDOMNode) {
    let newDOMNode = pojoElement.type === 'text' ? document.createTextNode(pojoElement.value) : document.createElement(pojoElement.type);

    if (pojoElement.children) {
        pojoElement.children.forEach((child) => {
            addElements(child, newDOMNode);
        });
    }
    console.log(parentDOMNode);
    parentDOMNode.appendChild(newDOMNode);
}

addElements(markup, main);