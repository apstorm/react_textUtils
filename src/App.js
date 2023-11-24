import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";

// import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b225e";
      showAlert("Dark mode has been enabled", "success");
      // document.title="TextUtils - Dark Mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title="TextUtils - Light Mode"
      // setTimeout(() => {
      //   document.title = "install textUtils now";
      // }, 2000);
      // setTimeout(() => {
      //   document.title = "textUtils is amazing";
      // }, 1000);
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils.." aboutText="About" /> */}
      {/* <Navbar  /> */}
      {/* <Router> */}
        <Navbar title="TextUtils.." mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
          {/* <Routes> */}
            {/* /users --> Component 1
                /users/home --> Component2 */}
            {/* <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analize below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            /> */}
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
          {/* </Switch> */}
          <TextForm
          heading="Enter the text to analize below"
          mode={mode}
          showAlert={showAlert}
        />
          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
