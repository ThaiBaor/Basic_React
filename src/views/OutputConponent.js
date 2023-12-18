import React from "react";

class OutputComponent extends React.Component {
    handleButtonClick = (obj) => {
        this.props.deleteObject(obj);
    }
    render() {
        let { arr } = this.props;
        return (
            <>
                <div className="output">
                    {
                        arr.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.name} - {item.phone}
                                    <button onClick={() => { this.handleButtonClick(item) }}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )

    }
}

export default OutputComponent;