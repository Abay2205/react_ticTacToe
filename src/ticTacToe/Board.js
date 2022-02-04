import React from 'react';
import Square from "./Square";

const Board = (props) => {
    const style = {width: '500px', height: '500px', margin: '0 auto', display: 'grid', gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)', textAlign: 'center'}
    return (
        <div style={style}>
            {props.board.map(el => <Square square={el} handleMove={props.handleMove} key={el.id}/>)}
        </div>
    );
};

export default Board;