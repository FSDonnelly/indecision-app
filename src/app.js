
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    // handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    // handlePick - pass down to Action and setup onClick - bind here
    // randomly pick an option 
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid Option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option Already Exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}

                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
        ;
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}
// Setup options prop for options component 
// Render the length of the array
// render new <p> for each option (set text set key)

// add removeAll button 
// setup removeAll -> alert some message
// setup onClick to fire the alert

// Options -> Options component here
class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}


// Option -> Option component here
class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.optionText}</li>
            </div>
        );
    }
}
// AddOption -> 
// 1. setup the form with text inoput and submit button
// 2. wire up onSubmit
// 3. handleAddOption -> fetch the value of the type -> if value then alert
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error };
        });


    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById(`app`));