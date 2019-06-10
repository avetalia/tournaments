import React from "react";
import styled from "styled-components";
import { useTournamentsApi } from "../api/use-api";

import { CardList } from "./card-list";

export const Filter = () => {
  const { data, isLoading } = useTournamentsApi();

  const [filterBy, setFilter] = React.useState("Live");
  const [series, setSeries] = React.useState([]);

  React.useEffect(() => {
    const filteredSeries = data.filter(item => {
      return item.status === filterBy;
    });
    setSeries(filteredSeries);
  }, [data, filterBy]);

  return (
    <>
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
