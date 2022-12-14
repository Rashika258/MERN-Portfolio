import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";

import { getUser, loadUser } from "./actions/user";
import Loader from "./components/Loader/Loader";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Timeline/TimeLine";
import Youtube from "./components/Admin/Youtube";
import Project from "./components/Admin/Project";
import Login from "./components/Login/Login";

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
            <Route
              path="/"
              element={
                <Home
                  youtubes={user.youtube}
                  timelines={user.timelines}
                  skills={user.skills}
                />
              }
            />

            <Route path="/about" element={<About about={user.about} />} />

            <Route
              path="/projects"
              element={<Projects projects={user.projects} />}
            />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />

            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />

            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />

            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
