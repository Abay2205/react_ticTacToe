import React from 'react';
const style = {border: '1px solid black', background: 'white', fontFamily: 'fantasy', fontSize: '80px', fontWeight: '800px', cursor: 'pointer'}

const Square = (props) => {



    return (
        <div style={style} onClick={() => props.handleMove(props.square.id)}>
            {props.square.value}
        </div>
    );
};

export default Square;