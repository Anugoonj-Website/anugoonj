import React from 'react'
import '../styles/eachSponsor.css'

const EachSponsor = (props) => {
  // const data = props.data;
  const names = props.names;
  const image= props.image;
  // const name = 'Coca Cola';
  // const image = 'coca_cola.png';
  return (

    <div className="eachSponsorComponent">
      <img src={require(`../images/sponsors_image/${image}`)} alt="img" className='spon_image' />
      <p className="image_name text-[white]">{names}</p>
    </div>

    


  )
}

export default EachSponsor