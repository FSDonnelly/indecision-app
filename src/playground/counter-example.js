// count - setup default prop value as 0


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    reset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )

    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))

// // let user = {
// //     name: 'Frank',
// //     age: '38',
// //     location: "San Diego"
// // };

// // function getLocation(location) {
// //     if (location) {
// //         return <p>Location: {location}</p>;
// //     } 
// // };


// // const templateTwo = (
// //     <div>
// //         <h1>{user.name ? user.name : 'Anonymous'}</h1>
// //         {(user.age >= 18) &&  <p>Age: {user.age}</p>}
// //         {getLocation(user.location)}
// //     </div>
// // );
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     console.log('addOne', count)

// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     console.log('minusOne')
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('reset')
// };

// // console.log(templateTwo);


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();
// // Make button "-1" - setup minusOne function and register - log "minusOne"

// // Make reset button "reset" - setup reset function - log "reset"




