import { Route, HashRouter as Router } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import "./App.css";
import DetailsPage from "../DetailsPage/DetailsPage";
import AddMoviePage from "../AddMoviePage/AddMoviePage";
import Header from "../Header/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}

        <Route path="/details/:id">
          <DetailsPage />
        </Route>

        {/* Add Movie page */}
        <Route path="/add-movie">
          <AddMoviePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
