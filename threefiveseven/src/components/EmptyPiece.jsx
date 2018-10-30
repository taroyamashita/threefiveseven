import React, { Component } from 'react';

const EmptyPiece = (props) =>{
    return (
            <button onClick={()=> props.pieceClickHandler(props.value, props.row, props.index)}> 
               empty
            </button>
             

        
    )

}


export default EmptyPiece; 