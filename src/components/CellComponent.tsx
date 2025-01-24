import React, { FC } from 'react'
import { Cell } from './models/Cell.ts';

interface ICellProps {
    cell: Cell,
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<ICellProps> = ({ cell, selected, click }) => {
  return (
    <div
    onClick={()=>click(cell)}
    className={['cell', cell.color, selected ? 'selected' : '', cell.available && cell.piece ? 'available-piece' : ''].join(' ')}

    >
        {cell.available && !cell.piece && <div className="available"/>}
        {cell.piece?.image && 
        <img src={cell.piece.image} alt={`${cell.piece?.name}`}></img>
        }
    </div>
  )
}

export default CellComponent