//import { useState } from "react";
import style from "./Repositories.module.css";
import ReactPaginate from "react-paginate";

const Repositories = (props) => {
  let pagesCount = Math.ceil(props.totalRepoCount / props.per_page);
  let pageChangeForPaginate = (data) => {
    let selected = data.selected;
    props.onPageChanged(selected + 1);
  };

  return (
    <div className={style.repositoriesWrapper}>
      <div>
        <h2>Repositories ({props.totalRepoCount})</h2>
        {props.repositories.map((u) => {
          return (
            <div className={style.repoContainer} key={u.id}>
              <div className={style.information}>
                <h3 className={style.name}>
                  <a rel="noreferrer" target="_blank" href={u.html_url}>
                    {u.name}
                  </a>
                </h3>
                <p className={style.description}>{u.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.paginator}>
        <p>{props.totalRepoCount} items</p>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pagesCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          activeClassName={style.selectedPage}
          containerClassName={style.pagination}
          onPageChange={pageChangeForPaginate}
        />
      </div>
    </div>
  );
};

export default Repositories;
