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
            activePlayer: "Player1",
            piecesRemaining: 15
        }
        this.pieceClickHandler = this.pieceClickHandler.bind(this);
    }

    remainingPieceCounter(){
        let count = 0; 
        for(var i = 0; i < this.state.row1.length; i++){
            if(this.state.row1[i]===0){
                count++
            }
        }
        for(var i = 0; i < this.state.row2.length; i++){
            if(this.state.row1[i]===0){
                count++
            }
        }
        for(var i = 0; i < this.state.row3.length; i++){
            if(this.state.row1[i]===0){
                count++
            }
        }
        console.log(count);
        return count;
    }

    pieceClickHandler(value, row, index){
       
       console.log(this.state.piecesRemaining);
        if(this.state.activeRow === "") {
            this.setState({activeRow: row});
        } else if (this.state.activeRow === row){
            let newArray = this.state[row];
            newArray[index] = 1; 
            this.setState({pieesRemaining: this.state.piecesRemaining--})
            this.setState({row: newArray});
            console.log(newArray);
        } else {
            console.log('End move?');
            if(this.state.activePlayer === "Player1"){
                this.setState({activePlayer: "Player2"});
            } else {
                this.setState({activePlayer: "Player1"});
            }
            this.setState({activeRow: ""});
        }   
    }

    render(){
        return(
            <div>
                <p> Active Player: {this.state.activePlayer}</p>
                <p> Pieces left: {this.state.piecesRemaining} </p>
                <div className ="board-container">
                <div className ="row1">
                    {this.state.row1.map((element, index)=> { 
                        if(element === 0){ 
                            return <Piece value={element} row="row1" index={index} pieceClickHandler={this.pieceClickHandler}/>}
                        else {
                            return <EmptyPiece/>
                        }    
                    })}
                </div>
                <div className ="row2">
                    {this.state.row2.map((element, index)=> { 
                        if(element === 0){ 
                            return <Piece value={element} row="row2" index={index} pieceClickHandler={this.pieceClickHandler}/>}
                        else {
                            return <EmptyPiece />
                        }    
                    })}
                </div>
                <div className ="row3">
                    {this.state.row3.map((element, index)=> { 
                        if(element === 0){ 
                            return <Piece value={element} row="row3" index={index} pieceClickHandler={this.pieceClickHandler}/>}
                        else {
                            return <EmptyPiece />
                        }    
                    })}
                </div>
                </div>
            </div>
        )
    }
}

export default Board
