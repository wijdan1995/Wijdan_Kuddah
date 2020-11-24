import React, { Component } from 'react'

export default class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div class="card mb-2">
                <div class="card-body">
                <h4 class="card-title">{lastName}, {firstName}</h4>
                <p class="card-text">Age: {age}</p>
                <p class="card-text">Hair Color: {hairColor}</p>
                </div>
            </div>
        )
    }
}
