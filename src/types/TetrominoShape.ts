/*

 Tetrominos are shapes built from four blocks. You may recognise them from Tetris.

 There are seven possible shapes:

 "O" shape
 ---------
  ┌─┬─┐
  ├─┼─┤
  └─┴─┘

 "I" shape
 ---------
  ┌─┐
  ├─┤
  ├─┤
  ├─┤
  └─┘

 "T" shape
 ---------
  ┌─┬─┬─┐
  └─┼─┼─┘
    └─┘

 "L" shape
 ---------
  ┌─┐
  ├─┤
  ├─┼─┐
  └─┴─┘

 "J" shape
 ---------
    ┌─┐
    ├─┤
  ┌─┼─┤
  └─┴─┘

 "S" shape
 ---------
    ┌─┬─┐
  ┌─┼─┼─┘
  └─┴─┘

 "Z" shape
 ---------
  ┌─┬─┐
  └─┼─┼─┐
    └─┴─┘

 */

export enum TetrominoShape {
  O,
  I,
  T,
  L,
  J,
  S,
  Z
}
