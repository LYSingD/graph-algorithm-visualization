export type TargetNode = {
    name: string;
    x: number;
    y: number;
};

export type StarterNode = {
    name: string;
    x: number;
    y: number;
};

export type EmptyNode = {
    name: string;
};

export type CellType = EmptyNode | StarterNode | TargetNode;

export interface Maze {
    row: number;
    col: number;
    tiles: Array<Array<CellType>>;
}
