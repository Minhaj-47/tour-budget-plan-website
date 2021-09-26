import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Member.css';
// getting individual member object through props and showed the dynamic data from object in member info section 
const Member = (props) => {
    const{name,age,img,university,contribution}=props.member;
    return (
        <div className="member-container">
            <div>
                {/* members profile pics */}
                <img src={img} alt="" />
            </div>
            {/* all members data shown dynamically  */}
            <div className="member-info">
                <h3>Name: {name}</h3>
                <h4>Age: {age} years</h4>
                <h4>Campus: {university}</h4>
                <h4>Minimum Contribution: {contribution} taka</h4>
                <button className="contribute-btn"
                onClick={()=>props.handleAddToCart(props.member)}
                ><FontAwesomeIcon icon={faDollarSign} /> Contribute</button>

            </div>
        </div>
    );
};

export default Member;