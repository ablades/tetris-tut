import React from 'react'
import GridSquare from './GridSquare'
import { useSelector } from 'react-redux'
import { shapes } from '../shapes'

export default function NextBlock(props) {
	const nextShape = useSelector((state) => state.game.nextShape)
	const box = shapes[nextShape][0] // Get the first rotation
	// Map the block to the grid
	const grid = box.map((rowArray, row) => {
		return rowArray.map((square, col) => {
			return <GridSquare key={`${row}${col}`} color={square} />
		})
    })
    
	return (
		<div className="next-block">
			{grid}
		</div>
	)
}