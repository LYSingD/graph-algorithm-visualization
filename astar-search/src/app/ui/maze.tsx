function initializeMaze() {
    const row = 50, col = 50
    return {
        row: row,
        col: col,
        cells: Array(row).fill(Array(col).fill("empty"))
    }
}

export default function Maze() {
    const maze = initializeMaze()
    return (
        maze.cells.map((row: any, rowIndex: any) => (
            <div key={`rol-${rowIndex}`} className="w-full grid grid-cols-50">
                {row.map((col: any, colIndex: any) => (
                    <div key={`${rowIndex}-${colIndex}`} className="border-t border-r border-t-red-500 border-red-500">
                        HI
                    </div>
                ))}
            </div>
        ))
    );
    
}