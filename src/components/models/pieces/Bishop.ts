import { Cell } from "../Cell.ts";
import { Colors } from "../Colors.ts";
import { Piece, PieceNames } from "./Piece.ts";

import blackBishopImg from '../../../assets/bishop.png';
import whiteBishopImg from '../../../assets/bishop_white.png';

export class Bishop extends Piece {
    constructor(color: Colors, cell: Cell){
        super(color, cell);

        this.image = color === Colors.BLACK ? blackBishopImg : whiteBishopImg;
        this.name = PieceNames.BISHOP;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        };

        if(this.cell.isEmptyDiagonal(target)){
            return true;
        }

        return false;
    }
}