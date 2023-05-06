import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {shows.map(({ show }) => (
        <div className="col" key={show.id}>
          <div className="card h-100">
            <img
              src={show.image?.medium}
              alt={show.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{show.name}</h5>
              <p className="card-text">{show.summary}</p>
              <Link
                to={`/shows/${show.id}`}
                className="btn btn-primary me-3 mb-3"
              >
                Show Summary
              </Link>
              <Link
                to={`/shows/${show.id}/book-tickets`}
                className="btn btn-primary mb-3"
              >
                Book Tickets
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
