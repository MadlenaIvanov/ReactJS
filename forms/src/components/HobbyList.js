import React from "react";

class HobbyList extends React.Component {
    render() {
        console.log(this.props)

        return (
            <>
            <h2>{this.props.title}</h2>
            <ul>
                <li>Swimming</li>
                <li>Flying</li>
                <li>Table tennis</li>
            </ul>
            </>
        )
    }
}

export default HobbyList;