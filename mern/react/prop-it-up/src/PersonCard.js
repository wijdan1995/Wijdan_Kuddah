import React, { useState } from 'react';

const PersonCard = props => {
    const { firstName, lastName, hairColor } = props;
    const [age, setAge] = useState(parseInt(props.age))
    return(
        <div class="card mb-2">
            <div class="card-body">
                <h4 class="card-title">{lastName}, {firstName}</h4>
                <p class="card-text">Age: {age}</p>
                <p class="card-text">Hair Color: {hairColor}</p>
                <button type="button" class="btn btn-primary btn-block" onClick={()=> setAge(age+1)}>Birthday Button for {firstName} {lastName}</button>
            </div>
        </div>
    );
}
export default PersonCard;