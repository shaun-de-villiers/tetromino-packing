import {TetrominoShape} from "./TetrominoShape";
import Position from "./Position";
import {Rotation} from "./Rotation";
import {getBlocksInShape} from "../HelperFunctions";

export class Board {
  private readonly _width: number;
  private readonly _height: number;

  private readonly _occupiedBlocks: boolean[];
  private _hasIllegalPlacement: boolean;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._occupiedBlocks = new Array(this._width * this._height).fill(false);
    this._hasIllegalPlacement = false;
  }

  // Gets the width of the board in blocks
  public get width():  number {
    return this._width;
  }

  // Gets the height of the board in blocks
  public get height():  number {
    return this._height;
  }

  // Checks if a tetromino shape in a specific rotation can be placed at an absolute location in the board without
  // overlapping the edges of the board or another tetromino
  public checkTetrominoPlacement = (shape: TetrominoShape, position: Position, rotation: Rotation): boolean => {
    const absoluteBlockPositions = this.determineAbsoluteBlockPositions(shape, position, rotation);

    for (let i = 0; i < absoluteBlockPositions.length; i++) {
      if (!this.isBlockEmpty(absoluteBlockPositions[i])) {
        return false;
      }
    }

    return true;
  }

  // Returns true if the block at the position is empty; otherwise returns false.
  // Blocks beyond the bounds of the board are considered occupied.
  public isBlockEmpty = (position: Position): boolean => {
    if (position.x < 0 || position.x >= this._width) {
      return false;
    }

    if (position.y < 0 || position.y >= this._height) {
      return false;
    }

    return !this._occupiedBlocks[(position.y * this._width) + position.x];
  }

  // INTERNAL USE - do not call
  public placeTetromino = (shape: TetrominoShape, position: Position, rotation: Rotation): void => {
    const absoluteBlockPositions = this.determineAbsoluteBlockPositions(shape, position, rotation);

    for (let i = 0; i < absoluteBlockPositions.length; i++) {
      if (this.isBlockEmpty(absoluteBlockPositions[i])) {
        this.markBlockOccupied(absoluteBlockPositions[i]);
      } else {
        this._hasIllegalPlacement = true;
      }
    }
  }

  // INTERNAL USE - do not call
  public get hasIllegalPlacement(): boolean {
    return this._hasIllegalPlacement;
  }

  private markBlockOccupied = (position: Position) => {
    this._occupiedBlocks[(position.y * this._width) + position.x] = true;
  };

  private determineAbsoluteBlockPositions = (shape: TetrominoShape, position: Position, rotation: Rotation): Position[] => {
    const relativeBlockPositions = getBlocksInShape(shape, rotation);
    return relativeBlockPositions.map(relative => {
      return {
        x: relative.x + position.x,
        y: relative.y + position.y,
      }
    });
  };
}
