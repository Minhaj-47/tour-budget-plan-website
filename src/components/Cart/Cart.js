import React from 'react';
import Contributor from '../Contributor/Contributor';
// getting contributed member info through props and showed the required data in cart 
const Cart = (props) => {
    const {cart} =props;
    let totalQuantity =0;
    let total =0;
    for(const member of cart)
    {
        if(!member.quantity)
        {
            member.quantity=1;
        }
        total = total + member.contribution * member.quantity;
        console.log(total);
        totalQuantity =totalQuantity+member.quantity;
    }
    return (
        // cart section data like total amount collected and all 
        <div>
            <h3>Total contributed = {totalQuantity} times</h3>
            <h4>Total contribution = {total} Taka</h4>
            <h5>Contributed by:</h5>
           <ul>
                {
                    cart.map(contributor=><Contributor contributor={contributor}></Contributor>)
                }
           </ul>
        </div>
    );
};

export default Cart;