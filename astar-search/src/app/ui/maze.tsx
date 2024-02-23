import { initializeMaze } from "@/app/utils/maze"

import clsx from "clsx"

export default function Maze() {
    const maze = initializeMaze()
    return (
        maze.tiles.map((row: any, rowIndex: any) => (
            <div 
                id={`rol-${rowIndex}`} 
                key={`rol-${rowIndex}`} 
                className="w-full flex flex-row justify-center items-center">
                {row.map((col: any, colIndex: any) => (
                    <div 
                        id={`${rowIndex}-${colIndex}`}
                        key={`${rowIndex}-${colIndex}`} 
                        className={clsx(
                            "w-6 h-6 border-t border-r border-t-red-500 border-red-500 bg-white",
                            {
                                "border-l border-l-red-500": colIndex === 0,
                                "border-b border-b-red-500": rowIndex === maze.row - 1
                            }
                        )}
                    >
                        H
                    </div>
                ))}
            </div>
        ))
    );
    
}