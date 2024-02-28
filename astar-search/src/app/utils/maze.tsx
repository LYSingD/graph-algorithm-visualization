import {
  EmptyNode,
  StarterNode,
  TargetNode,
  Maze,
} from '@/app/lib/definitions';
import { start } from 'repl';

export function initializeMaze(): Maze {
  const row = 30,
    col = 50;
  const emptyNode: EmptyNode = {
    name: 'Empty',
  };
  const starterNode: StarterNode = {
    name: 'Starter',
    x: 5,
    y: 5,
  };
  const targetNode: TargetNode = {
    name: 'Target',
    x: row - 5,
    y: col - 5,
  };
  let maze: Maze = {
    row: row,
    col: col,
    tiles: Array.from({ length: row }, () =>
      Array.from({ length: col }, () => ({ ...emptyNode })),
    ),
  };
  maze.tiles[starterNode.x][starterNode.y] = starterNode;
  maze.tiles[targetNode.x][targetNode.y] = targetNode;
  return maze;
}
