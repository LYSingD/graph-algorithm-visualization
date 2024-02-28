import { initializeMaze } from '@/app/utils/maze';
import clsx from 'clsx';

import mazeStyles from '@/app/styles/maze.module.css';

export default function Maze() {
  const maze = initializeMaze();
  return maze.tiles.map((row: any, rowIndex: any) => (
    <div
      id={`rol-${rowIndex}`}
      key={`rol-${rowIndex}`}
      className="flex w-full flex-row items-center justify-center"
    >
      {row.map((_, colIndex: any) => (
        <div
          id={`${rowIndex}-${colIndex}`}
          key={`${rowIndex}-${colIndex}`}
          className={clsx(
            'h-6 w-6 border-r border-t border-red-500 border-t-red-500 bg-white text-center',
            mazeStyles[maze.tiles[rowIndex][colIndex].name],
            {
              'border-l border-l-red-500': colIndex === 0,
              'border-b border-b-red-500': rowIndex === maze.row - 1,
            },
          )}
        >
          H
        </div>
      ))}
    </div>
  ));
}
