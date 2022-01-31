import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import { StyledCard, StyledContainer } from "./Card";

function Items({ currentItems }) {
  return (
    <>
      <StyledContainer>
        {currentItems &&
          currentItems.map((item) => (
            <StyledCard key={item.name.common}>
              <h4>{item.name.common}</h4>
              <Link className="" to={`/${item.name.common}`}>
                See more information
              </Link>
              <img src={item.flags.png} alt={item.name.common} />
            </StyledCard>
          ))}
      </StyledContainer>
    </>
  );
}

export function PaginatedItems({ data, filter }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 10;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / 10));
  }, [itemOffset, data]);

  useEffect(() => {
    setItemOffset(0);
  }, [data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {data.length > 0 ? (
        <>
          <p className="results">
            {data.length} {data.length > 1 ? "results" : "result"}
          </p>
          <Items currentItems={currentItems} />
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={0}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="< "
            renderOnZeroPageCount={null}
            containerClassName="container"
            activeClassName="current"
          />
        </>
      ) : (
        filter.length > 0 && <h6 className="results">No results found</h6>
      )}
    </>
  );
}
