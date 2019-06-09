import { useState, useEffect } from "react";
import tournamentsApi from "./tournaments-axios";

function uniqBy(a, key) {
  var seen = {};
  return a.filter(function(item) {
    var k = key(item);
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });
}

export const useTournamentsApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await tournamentsApi.get("/");
        const tournaments = response.data;
        const series = tournaments.map(item => {
          return item.series;
        });
        const uniqueSeries = uniqBy(series, item => item.id);

        setData(uniqueSeries);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { data, isLoading, isError };
};
