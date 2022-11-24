import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fXqoP6RrRwOJZOC84XDvh4V0aJWvD7sU5WN41odUHKA",
  },
});
