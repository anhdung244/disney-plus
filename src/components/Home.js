import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import Trending from "./Trending";

import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../features/movie/movieSlice";

function Home(props) {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.name);

  let recommends = useRef([]);
  let newDisneys = useRef([]);
  let originals = useRef([]);
  let trending = useRef([]);

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends.current = [
              ...recommends.current,
              { id: doc.id, ...doc.data() },
            ];
            break;

          case "new":
            newDisneys.current = [
              ...newDisneys.current,
              { id: doc.id, ...doc.data() },
            ];
            break;

          case "original":
            originals.current = [
              ...originals.current,
              { id: doc.id, ...doc.data() },
            ];
            break;

          case "trending":
            trending.current = [
              ...trending.current,
              { id: doc.id, ...doc.data() },
            ];
            break;

          default:
            break;
        }
      });

      dispatch(
        movieActions.setMovies({
          recommend: recommends.current,
          newDisneys: newDisneys.current,
          original: originals.current,
          trending: trending.current,
        })
      );
    });
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Recommends></Recommends>
      <NewDisney></NewDisney>
      <Originals></Originals>
      <Trending></Trending>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
