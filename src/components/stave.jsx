import Vex from 'vexflow';
import React, {Component} from 'react';

const VF = Vex.Flow;

export default class Stave extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,

        };
    };

    componentDidMount() {


        const svgContainer = document.createElement('div');

        const {notes} = this.props;


        var vf = new VF.Factory({
            renderer: {elementId: svgContainer, width: 500, height: 100}
        });

        var score = vf.EasyScore();

        // first bar (with time signature and cleffs)
        var bar1 = score.voice(score.notes(notes[0]));

        var beams1 = VF.Beam.applyAndGetBeams(bar1); // autobeam a voice
        var system1 = this.makeSystem(vf, 260);
        system1.addStave({voices: [bar1,]}).addClef('treble').addTimeSignature('4/4');

        // second bar
        var bar2 = score.voice(score.notes(notes[1]));
        var beams2 = VF.Beam.applyAndGetBeams(bar2);

        var system2 = this.makeSystem(vf, 235);
        system2.addStave({
            voices: [
                bar2,
            ]
        });

        vf.draw();


        beams1.forEach(function(beam) {
            return beam.setContext(vf.getContext()).draw();
        });
        beams2.forEach(function(beam) {
            return beam.setContext(vf.getContext()).draw();
        });

        this.refs.outer.appendChild(svgContainer);
    }

    makeSystem(vf, width) {
        const system = vf.System({ x: this.state.x, y: this.state.y, width: width, spaceBetweenStaves: 10 });
        this.setState({x: this.state.x + width});
        return system;
    }

    render() {
        return <div ref="outer" style={{
            border: "2px blue solid",
            padding: 10,
            borderRadius: 10,
            display: "inline-block",
        }}>
        </div>;
    }

}
