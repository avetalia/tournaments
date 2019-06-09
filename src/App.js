import React from "react";
import styled from "styled-components";
import ButtonAppBar from "./ui/menu";
import SimpleContainer from "./ui/simple-container";
import Typography from "@material-ui/core/Typography";
import { SerieCard } from "./components/card";
import { CardList } from "./components/card-list";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <SimpleContainer>
        <TitleContainer>
          <Typography gutterBottom variant="h2" component="h2">
            Series
          </Typography>
        </TitleContainer>

        <SerieCard description="Amazing competitions in 5 EU countries" />
        <CardList />
      </SimpleContainer>
    </div>
  );
}

export default App;

export const TitleContainer = styled.div`
  padding: 2rem 1rem 1rem 2rem;
`;
