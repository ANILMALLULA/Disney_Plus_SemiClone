import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg' />
          <span>Home</span>
        </a>
        <a>
          <img src='/images/search-icon.svg' />
          <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg' />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src='/images/original-icon.svg' />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' />
          <span>MOVIES</span>
        </a>
        <a>
          <img src='/images/series-icon.svg' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='/images/ProfPic.jpg' />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  overflow: hidden;

  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.32px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 50px;
  border-radius: 30px;
  cursor: pointer;
`;
