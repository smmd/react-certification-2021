import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './Header.styles.css';

function Header() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton className="menu-button">
            <MenuIcon />
          </IconButton>
          <Typography className="title">Sag challenge!</Typography>
          <div className="search">
            <SearchIcon className="search-icon" />
            <InputBase placeholder="Search…" />
          </div>
          <AccountCircle />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
