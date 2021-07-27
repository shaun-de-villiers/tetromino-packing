import {TetrominoShape} from "./types/TetrominoShape";
import Position from "./types/Position";
import {Rotation} from "./types/Rotation";

export function randomInteger(max: number): number {
  const min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns the relative positions of the blocks in a tetromino
export function getBlocksInShape(shape: TetrominoShape, rotation: Rotation): Position[] {
  switch (shape) {
    case TetrominoShape.O:
      return getOShapeBlocks();
    case TetrominoShape.I:
      return getIShapeBlocks(rotation);
    case TetrominoShape.T:
      return getTShapeBlocks(rotation);
    case TetrominoShape.L:
      return getLShapeBlocks(rotation);
    case TetrominoShape.J:
      return getJShapeBlocks(rotation);
    case TetrominoShape.S:
      return getSShapeBlocks(rotation);
    case TetrominoShape.Z:
      return getZShapeBlocks(rotation);
  }

  return [];
}

function getOShapeBlocks(): Position[] {
  return [
    {x: 0, y: 0},
    {x: 0, y: 1},
    {x: 1, y: 0},
    {x: 1, y: 1}
  ]
}

function getIShapeBlocks(rotation: Rotation): Position[] {
  const isVertical = rotation === Rotation.Counterclockwise0Degrees
      || rotation === Rotation.Counterclockwise180Degrees;

  if (isVertical) {
    return [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 0, y: 2},
      {x: 0, y: 3}
    ];
  } else {
    return [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
      {x: 3, y: 0}
    ];
  }
}

function getTShapeBlocks(rotation: Rotation): Position[] {

  if (rotation === Rotation.Counterclockwise0Degrees) {
    return [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 0}
    ];
  }

  if (rotation === Rotation.Counterclockwise90Degrees) {
    return [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 1, y: 1},
      {x: 0, y: 2}
    ];
  }

  if (rotation === Rotation.Counterclockwise180Degrees) {
    return [
      {x: 0, y: 1},
      {x: 1, y: 1},
      {x: 1, y: 0},
      {x: 2, y: 1}
    ];
  }

  if (rotation === Rotation.Counterclockwise270Degrees) {
    return [
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 0, y: 1},
      {x: 1, y: 2}
    ];
  }

  return [];
}

function getLShapeBlocks(rotation: Rotation): Position[] {

  if (rotation === Rotation.Counterclockwise0Degrees) {
    return [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 0, y: 2},
      {x: 1, y: 2}
    ];
  }

  if (rotation === Rotation.Counterclockwise90Degrees) {
    return [
      {x: 0, y: 1},
      {x: 1, y: 1},
      {x: 2, y: 0},
      {x: 2, y: 1}
    ];
  }

  if (rotation === Rotation.Counterclockwise180Degrees) {
    return [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 2}
    ];
  }

  if (rotation === Rotation.Counterclockwise270Degrees) {
    return [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 2, y: 0}
    ];
  }

  return [];
}

function getJShapeBlocks(rotation: Rotation): Position[] {

  if (rotation === Rotation.Counterclockwise0Degrees) {
    return [
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 0, y: 2},
      {x: 1, y: 2}
    ];
  }

  if (rotation === Rotation.Counterclockwise90Degrees) {
    return [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
      {x: 2, y: 1}
    ];
  }

  if (rotation === Rotation.Counterclockwise180Degrees) {
    return [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 0, y: 1},
      {x: 0, y: 2}
    ];
  }

  if (rotation === Rotation.Counterclockwise270Degrees) {
    return [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 1, y: 1},
      {x: 2, y: 1}
    ];
  }

  return [];
}

function getSShapeBlocks(rotation: Rotation): Position[] {
  const isVertical = rotation === Rotation.Counterclockwise0Degrees
      || rotation === Rotation.Counterclockwise180Degrees;

  if (isVertical) {
    return [
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 2, y: 0}
    ];
  } else {
    return [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 1, y: 1},
      {x: 1, y: 2}
    ];
  }
}

function getZShapeBlocks(rotation: Rotation): Position[] {
  const isVertical = rotation === Rotation.Counterclockwise0Degrees
      || rotation === Rotation.Counterclockwise180Degrees;

  if (isVertical) {
    return [
      {x: 0, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 0},
      {x: 2, y: 1}
    ];
  } else {
    return [
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 0, y: 1},
      {x: 0, y: 2}
    ];
  }
}
