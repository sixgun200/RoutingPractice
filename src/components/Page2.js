import React from 'react';

const Page2 = props => {

    return (
        <div style={{margin: 20}}>
            {isNaN(props.routevalue) ? <h3>The word is: {props.routevalue}</h3> : <h3>The number is: {props.routevalue}</h3>}
        </div>
    );
}

export default Page2;
