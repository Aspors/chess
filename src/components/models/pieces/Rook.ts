import { Piece, PieceNames } from "./Piece.ts";

import blackRookImg from '../../../assets/rook.png';
import whiteRookImg from '../../../assets/rook_white.png';

import { Colors } from "../Colors.ts";
import { Cell } from "../Cell.ts";

export class Rook extends Piece {
    constructor(color: Colors, cell: Cell){
        super(color, cell);

        this.image = color === Colors.BLACK ? blackRookImg : whiteRookImg;
        this.name = PieceNames.ROOK;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        };

        if(this.cell.isEmptyVertical(target)) {
            return true;
        }

        if(this.cell.isEmptyHorizontal(target)){
            return true;
        }
        
        return false;
    }
}