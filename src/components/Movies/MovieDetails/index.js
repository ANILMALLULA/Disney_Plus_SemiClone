import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { selectMovies } from "../../../features/movie/movieSlice";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import db from "../../../firebase";

function Detail(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  let history = useHistory();

  console.log("Yes", movie);

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save the movie data
          setMovie(doc.data());
        } else {
          history.push("/");
          //Redirect to Home page
        }
      });
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt='disney' />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt='disney' />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src='/images/play-icon-black.png' alt='disney' />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src='/images/play-icon-white.png' alt='disney' />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatch>
              <img src='/images/group-icon.png' alt='disney' />
            </GroupWatch>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  margin: 20px 0;
  max-height: 200px;
  max-width: 260px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const PlayButton = styled.button`
  border-radius: 5px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatch = styled(AddButton)`
  background-color: black;
`;

const SubTitle = styled.p`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.p`
  line-height: 1.4;
  color: rgb(249, 249, 249);
  font-size: 17px;
  margin-top: 16px;
  min-height: 20px;
  margin-top: 26px;
  max-width: 750px;
`;
