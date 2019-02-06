import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

// pull the state out of constructor
// convert all 4 event handlers to class properties (arrow functions)
// delete the construcctor completely

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,

    };
    // handleDeleteOptions
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    };
    // handlePick - pass down to Action and setup onClick - bind here
    // randomly pick an option 
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // use  setState to set selectedOption
        this.setState(() => ({
            selectedOption: option
        }
        ));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid Option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option Already Exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}

                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}