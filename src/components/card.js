import React from "react";
import styled from "styled-components";
import { Label } from "semantic-ui-react";
import { format, isAfter, isBefore } from "date-fns";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export const SerieCard = ({
  name = "Name of Series",
  dateStart,
  dateEnd,
  description
}) => {
  const today = format(new Date(), "YYYY-MM-DD");

  console.log(today);
  console.log(dateStart);
  console.log(dateEnd);
  const afterEnd = isAfter(new Date(), new Date(dateEnd));
  //const beforeEnd = isBefore(new Date(), new Date(dateEnd));
  //const afterStart = isAfter(new Date(), new Date(dateStart));
  const beforeStart = isBefore(new Date(), new Date(dateStart));

  const activeness = () => {
    if (beforeStart) {
      return "Upcoming";
    } else if (afterEnd) {
      return "Finished";
    } else {
      return "Live";
    }
  };

  const active = activeness();

  return (
    <Card>
      <CardMedia
        component="img"
        alt="Serie Cover"
        height="140"
        image="https://amp.businessinsider.com/images/55d78b46dd0895ab488b45ee-750-422.jpg"
        title="Serie pic"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography component="p">{description}</Typography>

        <br />
        <Label as="a" color="teal" tag>
          {active}
        </Label>
      </CardContent>
    </Card>
  );
};

export const Card = styled.div`
  margin: 1rem;
  width: 300px;
  display: flex;
  flex-flow: column;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
`;
