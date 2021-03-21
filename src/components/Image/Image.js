import React from 'react';
import '../../assets/images/small-images.css';

export default function Image(props) {
  return (
    <div key={props.id}>
      <img className='small-image' src={props.urls} alt={props.user} />
    </div>
  );
}
