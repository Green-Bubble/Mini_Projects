import axios from "axios";

const KEY = "AIzaSyCPq1BjMGkxs0E-4GvBsfK-GSwvAh6k-uw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResult: 5,
    key: KEY,
  },
});
