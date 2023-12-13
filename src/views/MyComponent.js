import React from "react";

class MyComponent extends React.Component {

    state = {
        value: 'World',
    }
    onClick = () => {
        this.setState({ value: 'Bao' });
    }
    render() {
        return (
            <>
                <div className="firstDiv">
                    <button onClick={this.onClick}>Click</button>
                </div>
                <div className="secondDiv">
                    Hello {this.state.value}
                </div>
            </>
        )
    }
}
export default MyComponent