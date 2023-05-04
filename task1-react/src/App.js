import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

import SearchResultPage from "./components/SearchResultPage"

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>

                    <Route exact path="/" element={<Home/>}></Route>
                    <Route path="/search-result" element={<SearchResultPage/>}></Route>

                </Routes>
            </div>
        </Router>
    )
}

export default App;