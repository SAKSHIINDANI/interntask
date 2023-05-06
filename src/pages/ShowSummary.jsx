import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container mt-3">
      <h2>Summary for {show && show.name}</h2>
      {show ? (
        <div className="row">
          <div className="col-md-4">
            {show.image && (
              <img
                src={show.image.medium}
                alt={show.name}
                className="img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <p>
              <strong>Show Type:</strong> {show.type}
            </p>
            <p>
              <strong>Premiered:</strong> {show.premiered}
            </p>
            <p>
              <strong>Language:</strong> {show.language}
            </p>
            <p>
              <strong>Genres:</strong> {show.genres && show.genres.join(', ')}
            </p>
            <p>
              <strong>Summary:</strong> <br />
              {show.summary}
            </p>
            <button className="btn btn-primary">Book Tickets</button>
          </div>
        </div>
      ) : (
        <p>Loading show summary...</p>
      )}
    </div>
  );
};

export default ShowSummary;
