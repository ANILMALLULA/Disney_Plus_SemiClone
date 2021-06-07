import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../../features/user/userSlice";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const userName = useSelector(selectUserName);
  const history = useHistory();
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider).then((res) => {
      dispatch(
        setUserLogin({
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
        })
      );
      history.replace("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.replace("login");
    });
  };

  return (
    <>
      <Nav>
        <Logo src='/images/logo.svg' />

        {!userName ? (
          <Login onClick={() => signIn()}>LOGIN</Login>
        ) : (
          <>
            <NavMenu>
              <a>
                <img src='/images/home-icon.svg' alt='disney' />
                <span>Home</span>
              </a>
              <a>
                <img src='/images/search-icon.svg' alt='disney' />
                <span>SEARCH</span>
              </a>
              <a>
                <img src='/images/watchlist-icon.svg' alt='disney' />
                <span>WATCHLIST</span>
              </a>
              <a>
                <img src='/images/original-icon.svg' alt='disney' />
                <span>ORIGINALS</span>
              </a>
              <a>
                <img src='/images/movie-icon.svg' alt='disney' />
                <span>MOVIES</span>
              </a>
              <a>
                <img src='/images/series-icon.svg' alt='disney' />
                <span>SERIES</span>
              </a>
            </NavMenu>
            <UserImg src={userPhoto} alt='disney' onClick={signOut} />
          </>
        )}
      </Nav>
      {userName ? (
        <MobileNav>
          <a>
            <img src='/images/home-icon.svg' alt='disney' />
            <span>Home</span>
          </a>
          <a>
            <img src='/images/search-icon.svg' alt='disney' />
            <span>SEARCH</span>
          </a>
          <a>
            <img src='/images/watchlist-icon.svg' alt='disney' />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src='/images/original-icon.svg' alt='disney' />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src='/images/movie-icon.svg' alt='disney' />
            <span>MOVIES</span>
          </a>
          <a>
            <img src='/images/series-icon.svg' alt='disney' />
            <span>SERIES</span>
          </a>
        </MobileNav>
      ) : null}
    </>
  );
}

export default Header;

const Nav = styled.nav`
  overflow: hidden;
  min-height: 80px;
  background: #090b13;
  display: flex;
  justify-content: space-between;
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
  @media (max-width: 750px) {
    display: none;
  }
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

const MobileNav = styled(NavMenu)`
  background: #090b13;
  padding: 10px 20px;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-left: 0;
  }
  @media (min-width: 750px) {
    display: none;
  }
  a {
    margin: 10px 0;
    width: 120px;
  }
`;

const UserImg = styled.img`
  height: 50px;
  border-radius: 30px;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid white;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: black;

    border-color: transparent;
  }
`;
