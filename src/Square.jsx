import React from 'react';



const Square = (props) => {

    
    const handleClick = () => {
        if (!props.squareValue) {
            if (props.player) {
                props.squares.splice(props.index, 1, "X");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            } else {
                props.squares.splice(props.index, 1, "O");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            }
        }
    };

    console.log(props.squares, props.player);

    return (
    <div className="square" onClick={handleClick}>
         {props.squareValue === "O" ? <h4>O</h4> : props.squareValue}
    </div>
    );
};


//<img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" />

export default Square;

