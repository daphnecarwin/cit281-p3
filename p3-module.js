

function validDenomination(coin){
if([1,5,10,25,50,100].indexOf(coin) !== -1){ return true;} };


function valueFromCoinObject(obj) {
    let{denom:d = 0,count:c = 0} = obj;
    return d*c;
};

valueFromArray = (arr) => {
    return arr.reduce(valueFromCoinObject());
}

export function coinCount(...coinage) {
    return valueFromArray(coinage);
}

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));