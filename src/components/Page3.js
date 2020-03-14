import React from 'react';

const Page3 = props => {
    return (
        <div style={{margin: 20}}>
            <h3 style={{border: "1px solid black", height: 75, paddingTop: 20, backgroundColor: props.color1, color: props.color2}}>The word is: {props.anyword}</h3>
        </div>
    );
}

export default Page3;
