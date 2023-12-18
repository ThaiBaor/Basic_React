import React from "react";

class InputComponent extends React.Component {

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
        if (!this.state.name || !this.state.phone) {
            alert('Missing required name or phone');
            return;
        }
        this.props.addNewObject(
            {
                id: Math.floor(Math.random() * 1000) + '',
                name: this.state.name,
                phone: this.state.phone
            }
        )
        this.setState({
            name: '',
            phone: '',
        })
    };

    render() {
        return (
            <>
                <form>
                    <br />
                    <label>Name</label>
                    <input className="form-control" value={this.state.name} type="text" onChange={(event) => { this.typingNameHandler(event) }}></input>
                    <br />
                    <label>Phone</label>
                    <input className="form-control" value={this.state.phone} type="text" onChange={(event) => { this.typingPhoneHandler(event) }}></input>
                </form>
                <button onClick={() => { this.buttonClickHandler() }} >Submit</button>

            </>
        )
    }
}
export default InputComponent;