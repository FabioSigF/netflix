import React from 'react';
import mainLogo from '../../imgs/logo.png';
import mobileLogo from '../../imgs/logo_mobile.png';

export default function Logo() {
  return (
    <a href="/" className="logo">
      <img src={window.innerWidth > 1199 ? mainLogo : mobileLogo} alt="Netflix Home" />
    </a>
  )
}