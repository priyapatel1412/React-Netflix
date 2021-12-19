import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      //get lists from backend
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTVjMzZmMTEwMGViZjIxNmRmOWE5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODg1MTQ1MywiZXhwIjoxNjM5MjgzNDUzfQ.ZcIX7DJEJHtyKY2Xorahwj6XZvnksfU2XnImZkMqYpI",
            },
          }
        );

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />

      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}
