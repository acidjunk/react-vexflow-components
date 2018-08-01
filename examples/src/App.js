import React, {Component} from 'react';
import Stave from "../../src/components/stave";
import Bar from "../../src/components/bar";
import ReactDOM from 'react-dom';


class App extends Component {
    constructor(props) {
        super(props);

        // Default state
        this.state = {
            stave_notes: [
                'f5/8, e5, d5, c5/16, c5, d5/8, e5, f5, f5/32, f5, f5, f5',
                'e4/4, e4, e4, d4/8, e4'
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>Stave</h1>
                <Stave notes={this.state.stave_notes}/>
                <Bar/>
            </div>
        );
    }
}

export default App;
