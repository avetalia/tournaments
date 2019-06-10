import React from "react";
import styled from "styled-components";
import { Label } from "semantic-ui-react";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export const SerieCard = ({ name, status, description }) => {
  const [color, setColor] = React.useState("grey");

  React.useEffect(() => {
    const statusColor = status => {
      switch (status) {
        case "Upcoming":
          setColor("pink");
          break;
        case "Finished":
          setColor("grey");
          break;
        case "Live":
          setColor("teal");
          break;
        default:
          setColor("yellow");
      }
    };
    statusColor(status);
  }, [status]);

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
        <Label as="a" color={color} tag>
          {status}
        </Label>
      </CardContent>
    </Card>
  );
};

export const Card = styled.div`
  margin: 1rem;
  width: 240px;
  display: flex;
  flex-flow: column;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
`;
