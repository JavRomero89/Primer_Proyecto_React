import { React, useState } from "react";

const LikeButton = () => {

    const [counterOne, setCounterOne] = useState(0);
    const addLikeOne = () => setCounterOne(prev => prev += 1);
    const [counterTwo, setCounterTwo] = useState(0);
    const addLike = () => setCounterTwo(prev => prev += 1);

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    // const asignarColorOne = () => {
    //     const colorActual = colors[counterOne]
    //     document.getElementById("buttonOne").style.backgroundcolor = colorActual

        

    // }

    return (
        <div>
            <button id="buttonOne" onClick={addLikeOne}>{counterOne} Likes</button>
            <button id="buttonTwo" onClick={addLike}>{counterTwo} Likes</button>
        </div>
    )
}

export default LikeButton

