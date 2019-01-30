console.log('app.js is running');
// -- CHALLENGE #2
// create app object title/subtitle
// use title/subtitle in the template
// render template

// JSX - JavaScript XML

// if staements
// ternary operators
// logical operators

// -- CHALLENGE #3
// only render the subtitle (and p tag) if subtitle exist - logical and operator
// rendedr new p tag - is options.length > 0 "Here are your options" "No options"

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}
const appRoot = document.getElementById("app");

const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log("form submitted")
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderSubmitForm();
    }
};

const removeAll = () => {
    app.options = [];
    renderSubmitForm();
}
// create "remove all" button above list
// on click -> wipe array and rerender

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderSubmitForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick= {onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
   
    ReactDOM.render(template, appRoot);
};

renderSubmitForm();


// Create render function that renders new jsx 
//Call it right away
//Call it after options array added to