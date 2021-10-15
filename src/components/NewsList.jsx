import React, { useEffect } from "react";
import { useGlobalContext } from "../Globalstate/context";
import { Link } from "react-router-dom";
import News from "./News";

const NewsList = () => {
  const [add, setAdd] = React.useState(false);
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
        return ( <News item = {item} index = {index} key = {item.objectID}/>)
      })}
    </section>
  );
};

export default NewsList;
