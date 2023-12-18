import React from "react";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputConponent";

class MyComponent extends React.Component {
    state = {
        arr: [
            { id: '1', name: 'bao', phone: '235235' },
            { id: '2', name: 'hoai', phone: '6745745', },
            { id: '3', name: 'lam', phone: '436344' },
        ]
    };
    addNewObject = (obj) => {
        this.setState({ arr: [...this.state.arr, obj] });
    };
    deleteObject = (item) => {
        const index = this.state.arr.indexOf(item);
        if (index === -1) return;
        let newArr = this.state.arr;
        newArr.splice(index, 1);
        this.setState({
            arr: newArr
        })
    };
    render() {
        return (
            <>
                <InputComponent addNewObject={this.addNewObject} />
                <OutputComponent
                    arr={this.state.arr}
                    deleteObject={this.deleteObject} />
            </>
        )
    }
}
export default MyComponent;