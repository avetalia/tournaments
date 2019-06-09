import React from "react";
import { SerieCard } from "./card";
import Grid from "@material-ui/core/Grid";
import { useTournamentsApi } from "../api/use-api";

export const CardList = () => {
  const { data } = useTournamentsApi();

  const cards = data.map(item => (
    <SerieCard
      key={item.id}
      name={item.name}
      dateStart={item.date_start}
      dateEnd={item.date_end}
    />
  ));
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {cards}
    </Grid>
  );
};
