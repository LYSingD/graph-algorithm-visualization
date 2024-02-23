import { EmptyNode, Maze } from "@/app/lib/definitions"

export function initializeMaze(): Maze {
    const emptyCell: EmptyNode = {
        name: "Empty"
    }
    const row = 30, col = 50
    let maze: Maze = {
        row: row,
        col: col,
        tiles: Array.from({ length: row }, () => 
            Array.from({ length: col }, () => 
                ({...emptyCell})
            )
        )
    }
    return maze;
}