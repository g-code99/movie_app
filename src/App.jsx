import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PageNotFound from "./pages/PageNotFound";

//This is the starting of the code
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        {/* <Route exact path='/' elemnt={<SearchBar />} /> */}
        <Route exact path='/movie/:movieId' element={<MoviePage />} />
        <Route exact path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
