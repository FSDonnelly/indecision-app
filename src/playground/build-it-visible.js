console.log('build-it-visible.js is running');
const appRoot = document.getElementById("app");

let visibility = false;

const toggle = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
        <h1>Visibility App</h1>
        <button onClick={toggle}>
            {visibility ? "Hide details" : "Show details"}
        </button>
        {visibility && (
            <div>
                <p>Hey. These are details you can see!</p>
            </div>
        )}
    </div>
    )
    ReactDOM.render(jsx, appRoot);
};

render();




