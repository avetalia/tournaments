import { useState, useEffect } from "react";
import tournamentsApi from "./tournaments-axios";
import { isAfter, isBefore } from "date-fns";
import { moreInfo } from "./more-info";

function uniqBy(a, key) {
  var seen = {};
  return a.filter(function(item) {
    var k = key(item);
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });
}

export const useTournamentsApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getStatus = (dateStart, dateEnd) => {
    const now = new Date();
    let afterEnd = isAfter(now, new Date(dateEnd));
    let beforeStart = isBefore(now, new Date(dateStart));

    if (beforeStart) {
      return "Upcoming";
    } else if (afterEnd) {
      return "Finished";
    } else {
      return "Live";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await tournamentsApi.get("/");
        const tournaments = response.data;
        const additionalData = tournaments.concat(moreInfo);
        //just to have more than 3 cards for filtering
        const seriesApi = additionalData.map(item => {
          return item.series;
        });
        const uniqueSeries = uniqBy(seriesApi, item => item.id);

        const series = uniqueSeries.map(item => {
          const status = getStatus(item.date_start, item.date_end);
          item.status = status;
          return item;
        });
        setData(series);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { data, isLoading, isError };
};
