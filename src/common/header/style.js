import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  padding-left: 100px;
  padding-right: 220px;
`

export const Logo = styled.a`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: line-block;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 100%;
  height: 100%;
  magrin:0 auto;
`
export const NavItem = styled.div`
  height: 100%;
  line-height: 56px;
  padding: 0 15px;
  display: line-block;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  'placeholder': '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  outline: none;
  border-radius: 19px;
  border: none;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  line-height: 38px;
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding:0 20px;
  border-radius: 19px;
  border:1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`