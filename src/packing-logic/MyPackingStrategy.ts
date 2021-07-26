import PackingStrategy from "./PackingStrategy";
import {TetrominoShape} from "../types/TetrominoShape";
import Position from "../types/Position";
import {Rotation} from "../types/Rotation";
import {randomInteger} from "./HelperFunctions";
import {Board} from "../types/Board";

export class MyPackingStrategy implements PackingStrategy {
  packTetromino(shape: TetrominoShape, board: Board): { position: Position; rotation: Rotation } {
    return {
      position: {
        x: randomInteger(board.width),
        y: randomInteger(board.height)
      },
      rotation: randomInteger(3) as Rotation
    };
  }
}
