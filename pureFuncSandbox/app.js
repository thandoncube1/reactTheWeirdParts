let counter = { name: 'Counter' };
let counterValue = 1;

function pureCounter(ctr, value) {
    console.log(`${ ctr.name } ${ value }`);
}

function notPureCounter(ctr, value) {
    ctr.name = ctr.name + ' Thando';
    counterValue = counterValue + 1;
    console.log(`${ ctr.name } ${ value }`);
}

pureCounter(counter, counterValue);
pureCounter(counter, counterValue + 1);
pureCounter(counter, counterValue);
console.log('--------');
notPureCounter(counter, counterValue);
notPureCounter(counter, counterValue + 1);
notPureCounter(counter, counterValue);
console.log(counter);