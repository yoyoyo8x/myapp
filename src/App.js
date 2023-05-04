import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editor from "./page/Editor";
import Reputation from "./page/Reputation";
import NewUser from "./page/NewUser";
import Voter from "./page/Voter";
import Moderators from "./page/Moderator";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Reputation />}
            activeClassName="active"
          />
          <Route
            path="/NewUser"
            element={<NewUser />}
            activeClassName="active"
          />
          <Route path="/Voter" element={<Voter />} activeClassName="active" />
          <Route path="/Editor" element={<Editor />} activeClassName="active" />
          <Route
            path="/Moderator"
            element={<Moderators />}
            activeClassName="active"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
