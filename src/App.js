import "./App.css";
import React, { useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appheader from "./component/Appheader.js";
import Sidebar from "./component/sidebar";
import Dashboard from "./pages/dashboard";
import orders from "./pages/orders";
import Products from "./pages/Products";
import reports from "./pages/reports";
import Transactions from "./pages/Transactions";
import VendorProductUploadForm from "./component/VendorProductUploadForm";
import MobileNavDrawer from "./component/MobileNavDrawer";

function App() {
  const [isMobile, setMobile] = useState(false);
  const [size, setSize] = useState([0, 0]);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth <= 550) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Router>
      <div className="App">
        <Appheader setIsMenuClicked={setIsMenuClicked} />

        <div className="main_window">
          {isMobile ? "" : <Sidebar />}
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/orders" component={orders} />
            <Route path="/products" component={Products} />
            <Route
              path="/VendorProductUploadForm"
              component={VendorProductUploadForm}
            />
            <Route path="/reports" component={reports} />
            <Route path="/Transactions" component={Transactions} />
          </Switch>
          {isMenuClicked ? "" : <MobileNavDrawer />}
        </div>
      </div>
    </Router>
  );
}

export default App;
