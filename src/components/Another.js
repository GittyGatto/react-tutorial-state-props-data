import React, {Component} from 'react';
import '../App.css';

export default class Another extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 42
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log("input from: " + name + " value: " + value);
    }

    render() {
        return (
            <div className="App">
                <div className="App-player">
                    <form>
                        <label>
                            Is going:
                            <input
                                name="isGoing"
                                type="checkbox"
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange}/>
                        </label>
                        <br/>
                        <label>
                            Number of guests:
                            <input
                                name="numberOfGuests"
                                type="number"
                                value={this.state.numberOfGuests}
                                onChange={this.handleInputChange}/>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}
