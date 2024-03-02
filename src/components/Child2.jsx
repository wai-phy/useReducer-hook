import React, { useContext } from 'react'
import { FirstContext } from '../FirstContext'

const Child2 = () => {
    const {liveIn} = useContext(FirstContext)
  return (
    <div>Child2 <br />
    <span>{liveIn}</span>
    </div>
  )
}

export default Child2