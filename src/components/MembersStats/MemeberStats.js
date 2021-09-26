import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './MemberStats.css';
// tour members state section 
const MemeberStats = () => {
    // setting initial state of members info container to empty array then set the new state in members array, same with cart section..
    const[members,setMembers]=useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        // fetching all members info from fakedb that i created 
        fetch('./tour-member.json')
        .then(res=>res.json())
        .then(data=>setMembers(data));
    },[])

    // contribute button handler function 
    const handleAddToCart = member =>{
        const newCart =[...cart,member];
        setCart(newCart);
        console.log(newCart);
    }

    
    return (
        // total members stats container including  cart 
        <div className="members-stats-container">
            {/* only members container section  */}
            <div className="members-container">
                {
                    // giving all member info as props to  Member component 
                    members.map(member=><Member
                    handleAddToCart={handleAddToCart}
                    key={member.name}
                    member={member}
                    ></Member>)
                }
            </div>
            {/* cart section  */}
            <div className="cart-container">
                <h2>Tour members contribution:</h2>
                <hr />
                {/* passing the contributed members info in cart array as props to Cart component  */}
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default MemeberStats;