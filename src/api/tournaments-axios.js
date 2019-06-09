import axios from "axios";

const API_URL = `https://gist.githubusercontent.com/idrinkritalin/fce0f5b884ffd813850ffb6919fe6bf7/raw/51007b611a52c427e34dbe9d40e91490e17c5248/tournaments.json`;

// const TournamentInfoJson = () =>
//   axios
//     .get(API_URL)
//     .then(response => response.data)
//     .catch(err => {
//       throw err;
//     });

// export default TournamentInfoJson;

export default axios.create({
  baseURL: API_URL
});
