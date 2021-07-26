import * as React from 'react';
import Tetromino from "../../components/Tetromino/Tetromino";
import {TetrominoShape} from "../../types/TetrominoShape";
import {Rotation} from "../../types/Rotation";

export interface MainPageProps {

}

export default class MainPage extends React.PureComponent<MainPageProps> {
  render() {
    return (
        <div>
          <Tetromino position={{x: 0, y: 0}} shape={TetrominoShape.I} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 3, y: 0}} shape={TetrominoShape.I} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 6, y: 0}} shape={TetrominoShape.I} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 9, y: 0}} shape={TetrominoShape.I} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 3}} shape={TetrominoShape.O} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 3, y: 3}} shape={TetrominoShape.O} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 6, y: 3}} shape={TetrominoShape.O} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 9, y: 3}} shape={TetrominoShape.O} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 6}} shape={TetrominoShape.T} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 3, y: 6}} shape={TetrominoShape.T} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 6, y: 6}} shape={TetrominoShape.T} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 9, y: 6}} shape={TetrominoShape.T} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 9}} shape={TetrominoShape.L} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 3, y: 9}} shape={TetrominoShape.L} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 6, y: 9}} shape={TetrominoShape.L} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 9, y: 9}} shape={TetrominoShape.L} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 12}} shape={TetrominoShape.J} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 3, y: 12}} shape={TetrominoShape.J} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 6, y: 12}} shape={TetrominoShape.J} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 9, y: 12}} shape={TetrominoShape.J} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 15}} shape={TetrominoShape.S} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 3, y: 15}} shape={TetrominoShape.S} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 6, y: 15}} shape={TetrominoShape.S} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 9, y: 15}} shape={TetrominoShape.S} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 18}} shape={TetrominoShape.Z} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 3, y: 18}} shape={TetrominoShape.Z} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 6, y: 18}} shape={TetrominoShape.Z} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 9, y: 18}} shape={TetrominoShape.Z} rotation={Rotation.Counterclockwise270Degrees}/>
        </div>
    );
  }
}
