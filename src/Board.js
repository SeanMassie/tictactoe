import React, {useState} from 'react'



export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(0)
    const xIsNext = turn % 2 === 0
    const nextPlayer = xIsNext ? "X" : "O"

    function handleClick(value, board) {
        board = [...board]
        const setValue = xIsNext ? "X" : "O"
        board[value] = setValue
        setBoard(board)
        setTurn(turn+1)
    }
    const gameOver = checkForWin(board)
    const status = (gameOver) ? "Game Over" : "Player " + nextPlayer + " is next"
    return (
        <>
            <h1>{status}</h1>
            <div className="grid-wrapper">
                <div className="grid-container">        
                    <Square value={0} board={board} handleClick={handleClick} />
                    <Square value={1} board={board} handleClick={handleClick} />
                    <Square value={2} board={board} handleClick={handleClick} />
                    <Square value={3} board={board} handleClick={handleClick} />
                    <Square value={4} board={board} handleClick={handleClick} />
                    <Square value={5} board={board} handleClick={handleClick} />
                    <Square value={6} board={board} handleClick={handleClick} />
                    <Square value={7} board={board} handleClick={handleClick}/>
                    <Square value={8} board={board} handleClick={handleClick} />
                </div>
            </div>

        </>
    )
}

function checkForWin(board) {
    var combos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    var resp = false;

    for (let combo of combos) {
        if (board[combo[0]] === "X" && board[combo[1]] === "X" && board[combo[2]] ==="X") {
            resp = true
            break
        }
        if (board[combo[0]] === "O" && board[combo[1]] === "O" && board[combo[2]] === "O") {
            resp = true
            break
        }
    }

    return resp
}

function Square({value, board, handleClick}) {
    return (
        <button className="square" onClick={() => handleClick(value,board)}>{board[value]}</button>
    )
}


