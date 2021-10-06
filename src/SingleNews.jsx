import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'


const SingleNews = () => {
    const [newsInfo, setNewsInfo] = useState([]);
    const [loading, setLoading] = useState('true')
    const {id} = useParams();

    const getSingleNews = async(id) => {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/items/${id}`
        );
        const data = await response.json()
        setNewsInfo(data)
        setLoading(false)
    }
    
    useEffect(() => {
        getSingleNews(id)
    },[])


    //Data return

    if(loading) return <div className = 'loading'></div>

    const filteredStuff = newsInfo.children.filter((item) => item.text !== '');
    console.log(filteredStuff)
  return (
    <>
      <Link to="/">
        <div className="home">
          <AiFillHome size={23} />
        </div>
      </Link>
      <div className="news-parent">
        <h3>{newsInfo.title}</h3>
        <h5 className="info info-p">
          By {newsInfo.author} | {newsInfo.points} Points
        </h5>
        <h5>Comments</h5>
        <div className="line"></div>
        <div className="comments"></div>
        {filteredStuff.map((item) => {
          return (
            <div
              className="comments"
              key={item.id}
              dangerouslySetInnerHTML={{ __html: item.text }}
            >
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SingleNews;
