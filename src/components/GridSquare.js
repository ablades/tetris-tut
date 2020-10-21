import React from 'react'


///One square in the grid
export default function GridSquare(props) {
    const classes = `grid-square color-${props.color}`
    return <div className={classes} />
}