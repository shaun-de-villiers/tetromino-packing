import * as React from 'react';
import {TetrominoShape} from "../../types/TetrominoShape";
import styles from './Tetromino.module.css';
import {getBlocksInShape, randomInteger} from "../../packing-logic/HelperFunctions";
import Position from "../../types/Position";
import {Rotation} from "../../types/Rotation";

export interface TetrominoProps {
  shape: TetrominoShape;
  position: Position;
  rotation: Rotation;
}

export interface TetrominoState {
  color: string
}

export default class Tetromino extends React.PureComponent<TetrominoProps, TetrominoState> {

  private static readonly COLORS = [
    "#54478c",
    "#2c699a",
    "#048ba8",
    "#0db39e",
    "#16db93",
    "#83e377",
    "#b9e769",
    "#efea5a",
    "#f1c453",
    "#f29e4c"
  ];

  private static readonly BLOCK_SIZE_PIXELS = 30;

  constructor(props: TetrominoProps) {
    super(props);

    this.state = {
      color: this.pickRandomColor()
    };
  }

  private pickRandomColor = (): string => {
    return Tetromino.COLORS[randomInteger(Tetromino.COLORS.length - 1)];
  }

  render() {
    return (
        <div
            className={styles.shape}
            style={{
              top: this.props.position.x * Tetromino.BLOCK_SIZE_PIXELS,
              left: this.props.position.y * Tetromino.BLOCK_SIZE_PIXELS
            }}
        >
          {getBlocksInShape(this.props.shape, this.props.rotation)
              .map((block, index) =>
                  <div
                      key={index}
                      className={styles.block}
                      style={{
                        background: this.state.color,
                        left: block.x * Tetromino.BLOCK_SIZE_PIXELS,
                        top: block.y * Tetromino.BLOCK_SIZE_PIXELS,
                        width: Tetromino.BLOCK_SIZE_PIXELS,
                        height: Tetromino.BLOCK_SIZE_PIXELS
                      }}
                  />
              )}
        </div>
    );
  }
}
