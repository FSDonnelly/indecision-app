console.log('build-it-visible.js is running');
// const appRoot = document.getElementById("app");


// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    toggle() {
       this.setState((prevState) => {
           return {
               visibility: !prevState.visibility
           }
       })
    };
    render() {
        return (
            <div>
        <h1>Visibility App</h1>
        <button onClick={this.toggle}>
            {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
            <div>
                <p>Hey. These are details you can see!</p>
            </div>
        )}
    </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false;

// const toggle = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//         <h1>Visibility App</h1>
//         <button onClick={toggle}>
//             {visibility ? "Hide details" : "Show details"}
//         </button>
//         {visibility && (
//             <div>
//                 <p>Hey. These are details you can see!</p>
//             </div>
//         )}
//     </div>
//     )
//     ReactDOM.render(jsx, appRoot);
// };

// render();




