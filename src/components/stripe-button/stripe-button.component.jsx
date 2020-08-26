import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price*100;
    const publishableKey ='pk_test_51HJzpzB7EByNaWBTCuO5gcMmT8rGkLNFkUxAzsNA0Vn3T1fZMTT8ITy2DebUeRJgNHKkrxJK6wAvOQePuuU3ENKF00JPEUMj7w';
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;