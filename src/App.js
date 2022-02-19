import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import reactDom from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </Router>
    </div>
  );
};

reactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
