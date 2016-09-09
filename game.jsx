import React from 'react';
import Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor(){
    super();
    this.board = new Minesweeper.Board(5, 3);
    this.state = {board: this.board};
  }

  updateGame(tile, flag){
    debugger;
    if (flag) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({board: this.board});
    if(this.board.won()) {
      alert("You won!");
    } else if (this.board.lost()) {
      alert("You lost!");
    }
  }

  restartGame(){

  }

  render(){
    const gameOver = this.board.won() || this.board.lost() ? true : false;
    const message = this.board.won() ? "Won!!!!" : "Lost";

      return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />

          <section className={gameOver ? "active" : "not-active"}>
            <h1>You {message}</h1>
            <button onClick={this.restartGame.bind(this)}>Play again? </button>
          </section>

      </div>
    );
  }
}
export default Game;
