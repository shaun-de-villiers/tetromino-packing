import {TetrominoShape} from "../types/TetrominoShape";
import Position from "../types/Position";
import {Rotation} from "../types/Rotation";
import {Board} from "../types/Board";
import PackingStrategy from "../types/PackingStrategy";
import {randomInteger} from "../HelperFunctions";

/* TODO:

The packTetromino() function of the CustomPackingStrategy is called when the "Add random tetromino" button is pressed,
to position the new tetromino on the board. A legal position for a tetromino doesn't overlap with any previously
placed tetrominos, and stays within the confines of the board. The function returns the absolute position of the
top-left corner of the shape on the board, and the desired rotation of the shape.

You task is to edit this class to improve the packing algorithm so that more tetrominos can be placed legally.
This challenge is believed to be NP-hard, so a perfect solution is not possible. Instead, aim to develop
heuristics that generally perform well.

You will be evaluated on the following criteria:

* The maintainability of your code
* The performance of your algorithm (within the timeframe of 2-3 hours - please don't overdo it!)
* The effectiveness of your algorithm

If you encounter any difficulties, feel free to contact me.

NOTES:

* Here are a few functions/properties you might find useful:

  * board.width
  * board.height
  * board.checkTetrominoPlacement()
  * board.isBlockEmpty()
  * getBlocksInShape()

* Feel free to use any state you want in this class to help with the layout. This class is recreated when the board
  is reset.

 */
export class CustomPackingStrategy implements PackingStrategy {
  packTetromino(shape: TetrominoShape, board: Board): { position: Position; rotation: Rotation } {

    // TODO: This dummy algorithm randomly rotates and places each tetromino. It's pretty bad! Up to you to improve it.

    const randomPosition: Position = {
      x: randomInteger(board.width - 1),
      y: randomInteger(board.height - 1)
    };

    const randomRotation: Rotation = randomInteger(3) as Rotation;

    return {
      position: randomPosition,
      rotation: randomRotation
    };
  }
}
