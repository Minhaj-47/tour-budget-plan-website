import React from 'react';
// we can get the name of the member who contributed from this component 
const Contributor = (props) => {
    const{name}=props.contributor;
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default Contributor;