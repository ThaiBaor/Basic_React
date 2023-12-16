import React from "react";

class MyComponent extends React.Component {

    state = {
        name: '',
        phone: '',
    };

    typingNameHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    typingPhoneHandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    };

    buttonClickHandler = () => {
        console.log(this.state);
    };

    render() {
        return (
            <>
                <form>
                    <br />
                    <label >Name</label>
                    <input className="form-control" type="text" value={this.state.name} onChange={(event) => { this.typingNameHandler(event) }}></input>
                    <br />
                    <label>Phone</label>
                    <input className="form-control" type="text" value={this.state.phone} onChange={(event) => { this.typingPhoneHandler(event) }}></input>
                </form>
                <button onClick={() => { this.buttonClickHandler() }} >Submit</button>
            </>
        )
    }
}
export default MyComponent