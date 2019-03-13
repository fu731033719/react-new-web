import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { connect } from 'react-redux';
import {searchFocus, searchBlur} from './store/createAction';
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
              <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></NavSearch>
              <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
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
const mapStateToProps = (state) => {
  // state变为immutable对象后 需要使用其get方法来获取需要的值
  return {
    focused: state.get('header').get('focused'),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputBlur() {
      const action = searchBlur();
      dispatch(action);
    },
    handleInputFocus() {
      const action = searchFocus();
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)