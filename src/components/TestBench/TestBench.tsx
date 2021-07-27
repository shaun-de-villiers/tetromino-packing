import * as React from 'react';
import {Board} from "../../types/Board";
import styles from "./TestBench.module.css";
import {TetrominoShape} from "../../types/TetrominoShape";
import Position from "../../types/Position";
import {Rotation} from "../../types/Rotation";
import Tetromino from "../Tetromino/Tetromino";
import {CustomPackingStrategy} from "../../TODO/CustomPackingStrategy";
import PackingStrategy from "../../types/PackingStrategy";
import {randomInteger} from "../../HelperFunctions";

export interface TestBenchProps {
  boardWidth: number;
  boardHeight: number;
}

interface TestBenchState {
  board: Board;
  packingStrategy: PackingStrategy;
  placedTetrominos: PlacedTetromino[];
}

interface PlacedTetromino {
  shape: TetrominoShape;
  position: Position;
  rotation: Rotation;
}

export default class TestBench extends React.PureComponent<TestBenchProps, TestBenchState> {

  private static readonly BLOCK_SIZE_PIXELS = 30;

  constructor(props: TestBenchProps) {
    super(props);

    this.state = {
      board: new Board(props.boardWidth, props.boardHeight),
      packingStrategy: new CustomPackingStrategy(),
      placedTetrominos: []
    }
  }

  private addRandomTetromino = () => {
    const shape = randomInteger(6) as TetrominoShape;

    const layout = this.state.packingStrategy.packTetromino(shape, this.state.board);

    this.state.board.placeTetromino(shape, layout.position, layout.rotation);

    this.setState({
      placedTetrominos: [...this.state.placedTetrominos, {
        shape: shape,
        position: layout.position,
        rotation: layout.rotation
      }]
    });
  };

  private resetBoard = () => {
    this.setState({
      packingStrategy: new CustomPackingStrategy(),
      board: new Board(this.props.boardWidth, this.props.boardHeight),
      placedTetrominos: []
    })
  };

  render() {
    return (
        <div className={styles.component}>
          <div>
            <div className={styles.toolbar}>
              {
                this.state.board.hasIllegalPlacement
                    ? <span className={styles.illegalPlacementPrompt}>{'Illegal placement!'}</span>
                    : <button
                        className={styles.addRandomButton}
                        onClick={this.addRandomTetromino}
                    >
                      {'Add random tetromino'}
                    </button>
              }
              <span className={styles.counter}>
                {this.state.placedTetrominos.length + (this.state.board.hasIllegalPlacement ? -1 : 0)}
              </span>
              <button
                  className={styles.resetButton}
                  onClick={this.resetBoard}
              >
                {'Reset board'}
              </button>
            </div>
            <div
                className={styles.board}
                style={{
                  width: this.state.board.width * TestBench.BLOCK_SIZE_PIXELS,
                  height: this.state.board.height * TestBench.BLOCK_SIZE_PIXELS
                }}
            >
              {
                this.state.placedTetrominos.map((placed, index) =>
                    <Tetromino
                        key={index}
                        shape={placed.shape}
                        position={placed.position}
                        rotation={placed.rotation}
                        isIllegal={
                          this.state.board.hasIllegalPlacement && (index === this.state.placedTetrominos.length - 1)
                        }
                    />
                )
              }
            </div>
          </div>
        </div>
    );
  }
}
