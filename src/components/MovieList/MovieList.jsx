import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();
  const [searchForm, setSearchForm] = useState("");
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);
  const handleClick = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <main>
      <h1 className="text-center my-4">MovieList</h1>
      <Container>
        <section className="movies">
          <Row className="justify-content-center">
            {movies.map((movie) => {
              return (
                <Col
                  key={movie.id}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4 d-flex"
                  data-testid="movieItem"
                >
                  <div className="d-grid gap-2">
                    <Card className="h-100 shadow-sm">
                      <Button
                        variant="primary"
                        onClick={() => handleClick(movie.id)}
                        className="mt-3"
                      >
                        <Card.Img
                          variant="top"
                          src={movie.poster}
                          alt={movie.title}
                          className="img-fluid"
                          style={{ maxHeight: "300px", objectFit: "cover" }} // Limit image height and ensure consistency
                        />
                      </Button>
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title className="text-center">
                          {movie.title}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
        </section>
      </Container>
    </main>
  );
}
