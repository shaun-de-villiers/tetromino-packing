import Position from "../types/Position";
import {Rotation} from "../types/Rotation";
import {TetrominoShape} from "../types/TetrominoShape";
import {Board} from "../types/Board";

export default interface PackingStrategy {
  packTetromino(shape: TetrominoShape, board: Board): {position: Position, rotation: Rotation}
}
