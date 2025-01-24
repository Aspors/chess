import { Piece, PieceNames } from "./Piece.ts";

import blackKnightImg from '../../../assets/knight.png';
import whiteKnightImg from '../../../assets/knight_white.png';

import { Colors } from "../Colors.ts";
import { Cell } from "../Cell.ts";

export class Knight extends Piece {
    constructor(color: Colors, cell: Cell){
        super(color, cell);

        this.image = color === Colors.BLACK ? blackKnightImg : whiteKnightImg;
        this.name = PieceNames.KNIGHT;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        };

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);


        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}