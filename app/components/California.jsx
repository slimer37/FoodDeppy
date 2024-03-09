import React from 'react'

const California = () => {
  return (
    <div style={{position:'relative'}}>
        <img style={{position:'relative', top: 0, left: 0}} src="california-counties.svg"></img>
        <img style={{position:'relative', top: 0, left: 0, filter:'invert(100%)'}} src="merced-county.svg"></img>
    </div>
  )
}

export default California