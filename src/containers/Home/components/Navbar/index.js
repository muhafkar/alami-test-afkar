import React from 'react';
import MediaQuery from 'react-responsive';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

export default function NavBar() {
  return (
    <>
      <MediaQuery query="(max-width: 992px)">
        <MobileNavbar />
      </MediaQuery>
      <MediaQuery query="(min-width: 992px)">
        <DesktopNavbar />
      </MediaQuery>
    </>
  );
}
