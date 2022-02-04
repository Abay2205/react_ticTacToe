import React, {useState} from 'react';

import Board from "./Board";
import {nanoid} from "nanoid";


const MainTtt = () => {

    const initialBoard = Array(9).fill({}).map(el => ({id: nanoid(), value: null}))
    const [board, setBoard] = useState(initialBoard);
    const [countMoves, setCountMoves] = useState(1)


    const handleMove = (id) => {
        let XorY = countMoves % 2 === 0 ? '0' : 'X';
        const newBoard = board.map(el => (el.id === id) ? {...el, value: XorY} : el);
        setBoard(newBoard);
        setCountMoves(countMoves + 1)

    }

    const checkWinner = () => {
        const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8],]
        for (let i = 0; i < arr.length; i++) {
            const [a, b, c] = arr[i];
            if (board[a].value === board[b].value && board[b].value === board[c].value) return board[a].value
        }
        return countMoves === 10 ? 'Friendship' : null;
    }

    const winner = checkWinner()
    const startAgain = () => {
        setBoard(initialBoard)
        setCountMoves(1)
    }


    return (<div>
            <Board board={board} handleMove={handleMove}/>
            {winner === null ? <p>Next player: {countMoves % 2 === 0 ? '0' : 'X'}</p> : <p>Winner: {winner}</p>}
            {winner !== null && <button onClick={startAgain}>Start again</button>}
        </div>);
};

export default MainTtt;