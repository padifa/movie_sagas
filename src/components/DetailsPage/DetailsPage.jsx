import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Container, Card } from "react-bootstrap";
export default function DetailsPage() {
  const { id } = useParams();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();
  const movie = movies.find((movie) => movie.id === Number(id));
  const handleClick = () => {
    history.push(`/`);
  };

  return (
    <div style={{ backgroundColor: "#11ee52" }}>
      <Container className="my-4">
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title} />
            <Card
              className="shadow-sm mb-4"
              style={{ backgroundColor: "#fff3cd" }}
            >
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Text
                  className="lead text-dark"
                  style={{ fontSize: "1.1rem", lineHeight: "1.5" }}
                >
                  {movie.description}
                </Card.Text>
              </Card.Body>
            </Card>

            <div className="text-center">
              <Button
                variant="secondary"
                onClick={handleClick}
                className="mt-3"
              >
                Back to Movie
              </Button>
            </div>
          </>
        ) : (
          <p>Movie not found</p>
        )}
      </Container>
    </div>
  );
}
