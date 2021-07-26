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
    '#f94144ff',
    '#f3722cff',
    '#f8961eff',
    '#f9844aff',
    '#f9c74fff',
    '#90be6dff',
    '#43aa8bff',
    '#4d908eff',
    '#577590ff',
    '#277da1ff',
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
