import React from 'react'
import { Navbar,Icon,NavItem } from 'react-materialize'
import MFSideNav from './MFSideNav'

const MFHeader = (props) => {


  return (
    <div>
      <Navbar
        alignLinks="left"
        brand={<a className="brand-logo" href="/">Mission Family</a>}
        centerLogo
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <MFSideNav  />
        <NavItem href="/login">LOGIN</NavItem>
      </Navbar>
    </div>
  )
}

export default MFHeader