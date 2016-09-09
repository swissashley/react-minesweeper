import React from 'react';
import Board from './board';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    this.props.updateGame(this.props.tile, e.altKey);
  }

  render () {
    let status = this.props.tile.adjacentBombCount() !== 0 ? this.props.tile.adjacentBombCount() : "---";
    status = this.props.tile.bombed ? "B" : status;
    status = this.props.tile.flagged ? "F" : status;
    status = this.props.tile.revealed ? status : "---";

    return(
      <div className="tile" onClick={this.handleClick.bind(this)}>{status}</div>
    );
  }
}
export default Tile;
