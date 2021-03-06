import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../Globalstate/context";

const Pagination_btn = () => {
  const { nbPages, page, getNews, query, setLoading, paginate } =
    useGlobalContext();
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);

  const toggleBtnUX = (condition, button) => {
    condition
      ? (button.current.disabled = true)
      : (button.current.disabled = false);
  };

  useEffect(() => {
    page  === nbPages - 1
      ? toggleBtnUX(true, nextBtn)
      : toggleBtnUX(false, nextBtn);
      
    page === 0 ? toggleBtnUX(true, prevBtn) : toggleBtnUX(false, prevBtn);
  }, [page]);

  const paginateHandler = (cmd) => {
    setLoading();
    getNews(query, page + 1);
    paginate(cmd);
  };

  return (
    <span className="btn-container">
      <button
        className="button"
        onClick={() => paginateHandler("prev")}
        ref={prevBtn}
      >{`<`}</button>
      <p className=".btn-container p">{page + 1}</p>
      <button
        className=" button"
        onClick={() => paginateHandler("next")}
        ref={nextBtn}
      >{`>`}</button>
    </span>
  );
};

export default Pagination_btn;
