import { Component } from 'react';
export default class Content extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <button onClick={this.props.OnClick}>{this.props.label}</button>
                <h1>Gioi thieu</h1>
                <p> phan xuan cuong tanh linh binh thuan</p>
            </div>
        )
    }
}
