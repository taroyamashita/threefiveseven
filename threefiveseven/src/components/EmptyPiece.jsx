import React, { Component } from 'react';

const EmptyPiece = (props) =>{
    return (
            <button onClick={()=> console.log('piece is dead...')}> 
               empty
            </button>
             

        
    )

}


export default EmptyPiece; 