// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}
// With the .push() method, we can add elements to the end of an Array - Destructive
// We can also .unshift() elements onto the beginning of an Array - Destructive

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name);
}
// The .pop() method removes the last element in an Array - Destructive
// The .shift() method removes the first element in an Array - Destructive

function appendDriver(name) {
    return [...drivers, name];
} 

function prependDriver(name) {
    return [name, ...drivers];
} 

function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1);
} 

function removeFirstDriver() {
    return drivers.slice(1)
} 

// combining .slice() and the spread operator allows us to replace elements nodestructively