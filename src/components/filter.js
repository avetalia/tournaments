import React from "react";
import styled from "styled-components";
import { useTournamentsApi } from "../api/use-api";

import { CardList } from "./card-list";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SimpleContainer from "../ui/simple-container";

export const Filter = () => {
  const { data, isLoading } = useTournamentsApi();
  const [series, setSeries] = React.useState([]);
  const [filterBy, setFilter] = React.useState(null);
  const [searchBy, setSearch] = React.useState("");

  React.useEffect(() => {
    const filteredSeries = data.filter(item => {
      return item.status === filterBy;
    });
    setSeries(filteredSeries);
  }, [data, filterBy, searchBy]);

  React.useEffect(() => {
    const searchedSeries = data.filter(item => {
      return item.name.toLowerCase().includes(searchBy);
    });
    setSeries(searchedSeries);
  }, [data, searchBy]);

  return (
    <>
      <SimpleContainer>
        <form autoComplete="off">
          <Grid container>
            <TextField
              width="500px"
              id="name"
              fullWidth
              label="Search by Name"
              value={searchBy}
              onChange={e => setSearch(e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </form>
        <ZeroTab
          onClick={() => {
            setFilter("Upcoming");
          }}
        >
          Upcoming
        </ZeroTab>
        |
        <ZeroTab
          onClick={() => {
            setFilter("Live");
          }}
        >
          Live
        </ZeroTab>
        |
        <ZeroTab
          onClick={() => {
            setFilter("Finished");
          }}
        >
          Finished
        </ZeroTab>
      </SimpleContainer>

      {isLoading ? "Loading..." : <CardList data={series} />}
    </>
  );
};

export const ZeroButton = styled.button`
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

export const ZeroTab = styled(ZeroButton)`
  &:hover {
    color: teal;
  }
`;
