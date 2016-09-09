import React from 'react';
import Game from './game';
import Tile from './tile';
class Board extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    return(
      <div>
        <ul className="board">
          {this.props.board.grid.map ((row, idx) => {
            return (<div key={idx}>
              {row.map((tile, idx1) => {
                 return (<Tile key={idx1}
                   tile={tile}
                   updateGame={this.props.updateGame}/>);
              })}
            </div>);
          })}
      </ul>
    </div>
    );
  }
}
export default Board;
