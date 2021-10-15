import React from "react";
import { useGlobalContext } from "../Globalstate/context";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Bookmarks = () => {
  const { bookmarkData } = useGlobalContext();
  
  if (bookmarkData.length === 0) {
    return (
      <>
        <Link to="/">
          <div className="home">
            <AiFillHome size={23} />
          </div>
        </Link>
        <h1 style={{ textAlign: "center", margin: "2rem" }}>
          You have No Bookmarks Yet
        </h1>
      </>
    );
  }

  return (
    <>
      {" "}
      <Link to="/">
        <div className="home">
          <AiFillHome size={23} />
        </div>
      </Link>
      <section className="stories bookmarkData">
        {bookmarkData.map((item, index) => {
          return (
            <div key={item.objectID} className="story">
              <h4>{item.title}</h4>
              <p className="info">
                {item.points} points | By {item.author} | {item.num_comments}{" "}
                comments{" "}
              </p>
              <Link to={`/${item.objectID}`} className="read-link">
                Read More
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Bookmarks;
