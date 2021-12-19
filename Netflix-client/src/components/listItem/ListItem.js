import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.scss";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    //#item is movie id get movie using id
    const getMovie = async () => {
      const res = await axios.get(`/movies/find/${item}`, {
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTVjMzZmMTEwMGViZjIxNmRmOWE5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODg1MTQ1MywiZXhwIjoxNjM5MjgzNDUzfQ.ZcIX7DJEJHtyKY2Xorahwj6XZvnksfU2XnImZkMqYpI",
        },
      });
      setMovie(res.data);
    };
    getMovie();
  }, [item]);

  return (
    //index is an item index 225 is item width and 50 is margin, 2.5 is half of the listitem margin
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <Fragment>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </Fragment>
        )}
      </div>
    </Link>
  );
}
