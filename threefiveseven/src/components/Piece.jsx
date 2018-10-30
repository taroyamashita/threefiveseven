import React, { Component } from 'react';

const Piece = (props) =>{
    return (
            <button onClick={()=> props.pieceClickHandler(props.value, props.row, props.index)}> 
                <img alt="Tally r01" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tally_r01.svg/2px-Tally_r01.svg.png"></img>
            </button>
             

        
    )

}


export default Piece; 