import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar id="main-header">
        <Container className="my-container">
          <Navbar.Brand>
            <h1>The Movies Saga!</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
