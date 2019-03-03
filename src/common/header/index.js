import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <Logo href='/'/>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <NavSearch></NavSearch>
              <i className="iconfont">&#xe62b;</i>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className='reg'>注册</Button>
            <Button className='write'>
              <i className="iconfont">&#xe62c;</i>
              写文章
            </Button>
          </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header