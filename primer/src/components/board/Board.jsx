import { React, useState } from "react";
import Square from "../square/Square"
export default function Board() {

    const [value, setValue] = useState(Array(9).fill(null));
    const [isTurnX, setIsTurnX] = useState(true);

    function handleClick(i) {
        if (calculateWinner(value) || value[i]) {
            return;
        }
        console.log(value[i]);
        const newValues = [...value]
        console.log(newValues);
        if (isTurnX) {
            newValues[i] = "X";
        } else {
            newValues[i] = "O";
        } setValue(newValues);
        setIsTurnX(!isTurnX);
    }
    const calculateWinner = (value) => {
        const lines = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (value[a - 1] && value[a - 1] === value[b - 1] && value[a - 1] === value[c - 1]) {
                console.log(value);
                return value[a - 1];
            }
        }

        return null;
    };

    const winner = calculateWinner(value)
    let status;
    if (winner) {
        status = "Ganador es: " + winner;
    } else {
        status = "Siguiente jugador: " + (isTurnX ? "X" : "O");
    }
    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={value[0]} onSquareClick={() => handleClick(0)} />
                <Square value={value[1]} onSquareClick={() => handleClick(1)} />
                <Square value={value[2]} onSquareClick={() => handleClick(2)} />
            </div>      <div className="board-row">
                <Square value={value[3]} onSquareClick={() => handleClick(3)} />
                <Square value={value[4]} onSquareClick={() => handleClick(4)} />
            </div>      <div className="board-row">
                <Square value={value[6]} onSquareClick={() => handleClick(6)} />
                <Square value={value[7]} onSquareClick={() => handleClick(7)} />
                <Square value={value[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>);
}