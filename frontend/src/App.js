import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";

import { getUser , loadUser} from "./actions/user";
import Loader from './components/Loader/Loader';

import "./App.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

const App = () => {

  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {

      WebFont.load({
        google: {
          families: ["Poppins", "Montserrat", "Lato", "Handlee"],
        },
      });
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);


  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            {/* <Route
              path="/"
              element={
                <Home
                  youtubes={user.youtube}
                  timelines={user.timelines}
                  skills={user.skills}
                />
              }
            /> */}

            {/* <Route path="/about" element={<About about={user.about} />} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App