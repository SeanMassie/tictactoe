import React, {useState} from 'react'

export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(0)
    const xIsNext = turn % 2 == 0
 return (
    <>
        <div className="grid-wrapper">
            <div className="grid-container">        
                <Square value={0} board={board} />
                <Square value={1} board={board} />
                <Square value={2} board={board} />
                <Square value={3} board={board} />
                <Square value={4} board={board} />
                <Square value={5} board={board} />
                <Square value={6} board={board} />
                <Square value={7} board={board} />
                <Square value={8} board={board} />
            </div>
        </div>

    </>
 )

function Square({value, board}) {
    return (
        <button className="square" onClick={() => handleClick(value,board)}>{board[value]}</button>
    )
}

function handleClick(value, board) {
    board = [...board]
    const setValue = xIsNext ? "X" : "O"
    board[value] = setValue
    setBoard(board)
    setTurn(turn+1)
}
}



