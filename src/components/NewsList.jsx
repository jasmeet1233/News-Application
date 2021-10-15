import React, { useEffect } from "react";
import { useGlobalContext } from "../Globalstate/context";
import { Link } from "react-router-dom";

const NewsList = () => {
  const {
    isLoading,
    news,
    isError,
    add2fav,
  } = useGlobalContext();

  //Returning Data
  if (isLoading) return <div className="loading"></div>;
  if (isError) return <div>Something went Wrong</div>;

  return (
    <section className="stories">
      {news.map((item, index) => {
        return (
          <div key={item.objectID} className="story">
            <h4>{item.title}</h4>
            <p className="info">
              {item.points} points | By {item.author} | {item.num_comments}{" "}
              comments{" "}
            </p>
            <div>
              <Link to={`/${item.objectID}`} className="read-link">
                Read More
              </Link>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                className="read-link"
                onClick={() => {
                  add2fav(news[index]);
                }}
              >
                {/* <BsFillBookmarkCheckFill
                  style={{ color: "grey" }}
                  size={19} /> */}
                Bookmark
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default NewsList;
