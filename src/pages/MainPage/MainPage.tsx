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
          <Tetromino position={{x: 5, y: 0}} shape={TetrominoShape.I} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 10, y: 0}} shape={TetrominoShape.I} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 15, y: 0}} shape={TetrominoShape.I} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 5}} shape={TetrominoShape.O} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 5, y: 5}} shape={TetrominoShape.O} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 10, y: 5}} shape={TetrominoShape.O} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 15, y: 5}} shape={TetrominoShape.O} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 10}} shape={TetrominoShape.T} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 5, y: 10}} shape={TetrominoShape.T} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 10, y: 10}} shape={TetrominoShape.T} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 15, y: 10}} shape={TetrominoShape.T} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 15}} shape={TetrominoShape.L} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 5, y: 15}} shape={TetrominoShape.L} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 10, y: 15}} shape={TetrominoShape.L} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 15, y: 15}} shape={TetrominoShape.L} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 20}} shape={TetrominoShape.J} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 5, y: 20}} shape={TetrominoShape.J} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 10, y: 20}} shape={TetrominoShape.J} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 15, y: 20}} shape={TetrominoShape.J} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 25}} shape={TetrominoShape.S} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 5, y: 25}} shape={TetrominoShape.S} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 10, y: 25}} shape={TetrominoShape.S} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 15, y: 25}} shape={TetrominoShape.S} rotation={Rotation.Counterclockwise270Degrees}/>

          <Tetromino position={{x: 0, y: 30}} shape={TetrominoShape.Z} rotation={Rotation.Counterclockwise0Degrees}/>
          <Tetromino position={{x: 5, y: 30}} shape={TetrominoShape.Z} rotation={Rotation.Counterclockwise90Degrees}/>
          <Tetromino position={{x: 10, y: 30}} shape={TetrominoShape.Z} rotation={Rotation.Counterclockwise180Degrees}/>
          <Tetromino position={{x: 15, y: 30}} shape={TetrominoShape.Z} rotation={Rotation.Counterclockwise270Degrees}/>
        </div>
    );
  }
}
