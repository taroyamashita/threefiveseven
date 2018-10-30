import React, { Component } from 'react';

const Piece = (props) =>{
    return (
        <button onClick={()=> props.pieceClickHandler(props.value, props.row, props.index)}> I'm a Piece button </button>
    )

}


export default Piece; 