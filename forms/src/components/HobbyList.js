import React from "react";
import './HobbyList.css';

class HobbyList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            hobbies: [],
            selectedHobby: null
        };

        this.onHobbieClick = this.onHobbieClick.bind(this);
    }

    componentDidMount() {
         console.log("ComponentDidMount")
        fetch('http://localhost:3030/jsonstore/hobbies')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    hobbies: Object.values(res)
                });
            });
    }

    onHobbieClick(e) {
        console.log(e.target)

        this.setState({selectedHobby: e.target.textContent})

    }

    
    render() {
        console.log(this.props)

        return (
            <>
            <h2>{this.props.title}</h2>
            <ul>
                {this.state.hobbies.map(x => 
                <li 
                    className={x.name === this.state.selectedHobby ? 'selected-hobby' : ''} 
                    onClick={this.onHobbieClick} 
                    key={x._id}
                >
                    {x.name}
                </li>)}
            </ul>
            </>
        )
    }
}

export default HobbyList;