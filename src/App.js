import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Player from './components/Player';
import Another from "./components/Another";

class App extends Component {
    constructor() {
        super();
        this.state = {name: "Helmut",
        title : "Welcome to react tutorial"};
    }

    render() {

        {/*change state.name after 10 sec.*/
        }
        setTimeout(() => {
            this.setState({name: "Hans"});
        }, 10000)


        const title = "Welcome"

        return (
            <div className="App">
                {/* Injecting data to Title
                with constant named title
                title={title}
                title={"Lena"}

                with state
                title={this.state.title}

                Injected data will be passed as
                props! -- see Title class
                * */}

                <Header/>
                <Title title={title}/>
                <Title title={this.state.title}/>
                <Player/>
                <Another/>

                {/*
                {this.state.name}*/}

            </div>
        );
    }
}

export default App;
