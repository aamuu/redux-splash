import React from 'react';
// import { Link } from 'react-router-dom';
import '../../assets/css/common/header.css';

export default function Header() {
  return (
    <React.Fragment>
      <nav className='navbar header'>
        <div className='container-fluid'>
          <i className='far fa-2x fa-images' />{' '}
          <span className='logo-text'>Image Gallery</span>
        </div>
      </nav>
    </React.Fragment>
  );
}
