import React from "react";

import { SerieCard } from "./card";
import Grid from "@material-ui/core/Grid";

export const CardList = ({ data }) => {
  const cards = data.map(item => (
    <SerieCard
      key={item.id}
      name={item.name}
      status={item.status}
      description="Unique series of tournaments on the Earth"
    />
  ));
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {cards}
    </Grid>
  );
};
