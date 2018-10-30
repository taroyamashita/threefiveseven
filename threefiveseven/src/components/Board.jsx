import React, { Component } from 'react';
import Piece from './Piece.jsx';

class Board extends Component {
    constructor(props){
        super(props)
        this.state = { row1: [0, 0 ,0], row2: [0,0,0,0,0], row3: [0,0,0,0,0,0,0]}

    }

    render(){
        return(
            <div>
                <p>Board Goes Here</p>
                <div>
                    {this.state.row1.map((element)=> <Piece />)}
                </div>
                <div>
                    {this.state.row2.map((element)=> <Piece />)}
                </div>
                <div>
                    {this.state.row3.map((element)=> <Piece />)}
                </div>
               
            </div>
        )
    }
}

export default Board
