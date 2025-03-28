import React, {useState} from 'react'

export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [history, setHistory] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(0)
    const xIsNext = turn % 2 === 0
    const nextPlayer = xIsNext ? "X" : "O"

    function handleClick(value, board, history, turn) {
        board = [...board]
        history = [...history]
        const setValue = xIsNext ? "X" : "O"
        if (board[value] != null)
            return
        board[value] = setValue
        history[turn] = value;
        setBoard(board)
        setTurn(turn+1)
        setHistory(history)

    }

    function undo(board, history) {
        if (turn === 0)
            return
        const last = history[turn-1]
        board = [...board]
        board[last] = null
        setBoard(board)
        setTurn(turn-1)
    }

    function reset() {
        setTurn(0)
        setBoard(Array(9).fill(null))
        setHistory(Array(9).fill(null))
    }

    const gameOver = checkForWin(board)
    const status = (gameOver) ? "Game Over" : "Player " + nextPlayer + " is next"
    const buttonOnClick = (gameOver) ? () => {} : handleClick;
    return (
        <>
            <div className="grid-wrapper">
                <h1 className="tictactoe-header">{status}</h1>
                    <Square value={0} row={1} column={1} board={board} handleClick={() => buttonOnClick(0, board, history, turn)} />
                    <Square value={1} row={1} column={2} board={board} handleClick={() => buttonOnClick(1, board, history, turn)} />
                    <Square value={2} row={1} column={3} board={board} handleClick={() => buttonOnClick(2, board, history, turn)} />
                    <Square value={3} row={2} column={1} board={board} handleClick={() => buttonOnClick(3, board, history, turn)} />
                    <Square value={4} row={2} column={2} board={board} handleClick={() => buttonOnClick(4, board, history, turn)} />
                    <Square value={5} row={2} column={3} board={board} handleClick={() => buttonOnClick(5, board, history, turn)} />
                    <Square value={6} row={3} column={1} board={board} handleClick={() => buttonOnClick(6, board, history, turn)} />
                    <Square value={7} row={3} column={2} board={board} handleClick={() => buttonOnClick(7, board, history, turn)}/>
                    <Square value={8} row={3} column={3} board={board} handleClick={() => buttonOnClick(8, board, history, turn)} />
                    <button style={{gridRow: "2/3", gridColumn:"5/6"}} onClick={() => undo(board, history)}>Undo</button>
                    <button style={{gridRow: "4/5", gridColumn:"5/6"}} onClick={reset}>Restart</button>
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

function Square({board, value, handleClick, row, column}) {
    return (
        <button style={{gridRow: row + 1 + " / span 1", gridColumn: column + "/ span 1"}} className="square" onClick={handleClick}>{board[value]}</button>
    )
}


