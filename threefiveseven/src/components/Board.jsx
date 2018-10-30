import React, { Component } from 'react';
import Piece from './Piece.jsx';
import EmptyPiece from './EmptyPiece';

class Board extends Component {
    constructor(props){
        super(props)
        this.state = { 
            row1: [0,0,0], 
            row2: [0,0,0,0,0], 
            row3: [0,0,0,0,0,0,0],
            activeRow: "",
            activePlayer: ""
        }
        this.pieceClickHandler = this.pieceClickHandler.bind(this);
    }

    pieceClickHandler(value, row, index){
        if(this.state.activeRow === "") {
            this.setState({activeRow: row});
        } else if (this.state.activeRow === row){
            let newArray = this.state[row];
            newArray[index] = 1; 
            this.setState({row: newArray});
            console.log(newArray);
        } else {
            console.log('End move?');
            this.setState({activeRow: ""});
        }   
    }

    render(){
        return(
            <div>
                <p>Board Goes Here</p>
                <div className ="row">
                    {this.state.row1.map((element, index)=> { 
                        if(element === 0){ 
                            return <Piece value={element} row="row1" index={index} pieceClickHandler={this.pieceClickHandler}/>}
                        else {
                            return <EmptyPiece />
                        }    
                    })}
                </div>
                <div className ="row">
                    {this.state.row2.map((element, index)=> { 
                        if(element === 0){ 
                            return <Piece value={element} row="row2" index={index} pieceClickHandler={this.pieceClickHandler}/>}
                        else {
                            return <EmptyPiece />
                        }    
                    })}
                </div>
                <div className ="row">
                    {this.state.row3.map((element, index)=> { 
                        if(element === 0){ 
                            return <Piece value={element} row="row3" index={index} pieceClickHandler={this.pieceClickHandler}/>}
                        else {
                            return <EmptyPiece />
                        }    
                    })}
                </div>
            </div>
        )
    }
}

export default Board
