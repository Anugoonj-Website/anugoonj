import React from 'react'
import '../styles/smallEventLeft.css'
import Circle from './Cirlce'

const SmallEventLeft = () => {
  return (
    <div className='left_event_body'>
        <Circle />

        <div className='event_content'>
          <h1 className='event_heading'>event1</h1>
          <p className='event_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores epturi.</p>
        </div>
    </div>
  )
}

export default SmallEventLeft   