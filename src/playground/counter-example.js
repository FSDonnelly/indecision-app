// let user = {
//     name: 'Frank',
//     age: '38',
//     location: "San Diego"
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } 
// };


// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age >= 18) &&  <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne', count)
   
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne')
};
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset')
};

// console.log(templateTwo);


const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
// Make button "-1" - setup minusOne function and register - log "minusOne"

// Make reset button "reset" - setup reset function - log "reset"




