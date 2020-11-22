import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appheader from "./component/appheader.js";
import Sidebar from "./component/sidebar";
import Dashboard from "./pages/dashboard";
import orders from "./pages/orders";
import Products from "./pages/Products";
import reports from "./pages/reports";
import Transactions from "./pages/Transactions";
import VendorProductUploadForm from "./component/VendorProductUploadForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Appheader />
        <div className="main_window">
          <Sidebar />
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
        </div>
      </div>
    </Router>
  );
}

export default App;
