import React, { Component } from 'react'

export default class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div class="card mb-2">
                <div class="card-body">
                <h4 class="card-title">{lastName}, {firstName}</h4>
                <p class="card-text">Age: {this.state.age}</p>
                <p class="card-text">Hair Color: {hairColor}</p>
                <button type="button" class="btn btn-primary btn-block" onClick={()=> this.setState({age: parseInt(this.state.age)+1})}>Birthday Button for {firstName} {lastName}</button>
                </div>
            </div>
        )
    }
}
