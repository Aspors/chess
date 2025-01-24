import { Piece, PieceNames } from "./Piece.ts";

import blackKingImg from '../../../assets/king.png';
import whiteKingImg from '../../../assets/king_white.png';

import { Colors } from "../Colors.ts";
import { Cell } from "../Cell.ts";

export class King extends Piece {
    constructor(color: Colors, cell: Cell){
        super(color, cell);

        this.image = color === Colors.BLACK ? blackKingImg : whiteKingImg;
        this.name = PieceNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        };
        
        return true;
    }
}