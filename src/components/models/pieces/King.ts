import { Piece, PieceNames } from "./Piece.ts";

import blackKingImg from "../../../assets/king.png";
import whiteKingImg from "../../../assets/king_white.png";

import { Colors } from "../Colors.ts";
import { Cell } from "../Cell.ts";

export class King extends Piece {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);

        this.image = color === Colors.BLACK ? blackKingImg : whiteKingImg;
        this.name = PieceNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const absX = Math.abs(this.cell.x - target.x);

        const absY = Math.abs(this.cell.y - target.y);

        if ((absX === 1 || absX === 0) && (absY === 1 || absY === 0)) {
            return true;
        }

        return false;
    }
}
