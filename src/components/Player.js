import React, {Component} from 'react';
import '../App.css';

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
        current: 42};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("current: " + this.state.current);
        this.setState({value: event.target.value});
        this.setState({current: event.target.value});
    }

    handleSubmit(event) {
        console.log("submitted value: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div className="App-player">

                    <p>player-class {this.state.value}</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}
