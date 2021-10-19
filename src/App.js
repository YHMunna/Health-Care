import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Menubar from "./Menubar/Menubar";
import Footer from "./Shared/Footer/Footer";
import Medicine from "./Medicine/Medicine";
import Education from "./Education/Education";
import Services from "./Services/Services";
import NotFound from "./NotFound/NotFound";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/medicine">
              <Medicine></Medicine>
            </PrivateRoute>
            <PrivateRoute exact path="/education">
              <Education></Education>
            </PrivateRoute>

            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
