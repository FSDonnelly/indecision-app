"use strict";

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

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};
var appRoot = document.getElementById("app");

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    // console.log("form submitted")
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderSubmitForm();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderSubmitForm();
};
// create "remove all" button above list
// on click -> wipe array and rerender

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var renderSubmitForm = function renderSubmitForm() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderSubmitForm();

// Create render function that renders new jsx 
//Call it right away
//Call it after options array added to
