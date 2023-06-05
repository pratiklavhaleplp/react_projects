import React from 'react';

class FourthCounterImplementation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            name: 'pratik'
        }
        this.incrementHandler = this.incrementHandler.bind(this);
        this.decrementHandler = this.decrementHandler.bind(this);
    }

    incrementHandler() {
        this.setState((pre) => {
            return {
                ...pre,
                counter: pre.counter + 1
            };
        });
    }
    decrementHandler() {
        this.setState((pre) => {
            return {
                ...pre,
                counter: pre.counter - 1
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Counter value is : {this.state.counter} {this.state.name}</h1>
                <button onClick={this.incrementHandler}>+</button>
                <button onClick={this.decrementHandler}>-</button>
            </div>
        )
    }
};


export default FourthCounterImplementation;