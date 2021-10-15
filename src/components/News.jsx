import React from 'react'
import { useGlobalContext } from '../Globalstate/context';
import { Link } from 'react-router-dom';

const News = ({item, index}) => {
    const [add, setAdd] = React.useState(false);
    const {add2fav, news} = useGlobalContext()

    return (
      <div key={item.objectID} className="story">
        <h4>{item.title}</h4>
        <p className="info">
          {item.points} points | By {item.author} | {item.num_comments} comments{" "}
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
              setAdd(true);
            }}
          >
            {/* <BsFillBookmarkCheckFill
                  style={{ color: "grey" }}
                  size={19} /> */}
            {add ? "Added" : "Bookmark"}
          </button>
        </div>
      </div>
    );
}

export default News
