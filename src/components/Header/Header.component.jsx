import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Styled from './HeaderStyled';

function Header() {
  return (
    <Styled.Header>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Styled.Title>Sag challenge!</Styled.Title>
          <Styled.Search>
            <SearchIcon />
            <InputBase placeholder="Search…" />
          </Styled.Search>
          <AccountCircle />
        </Toolbar>
      </AppBar>
    </Styled.Header>
  );
}

export default Header;
